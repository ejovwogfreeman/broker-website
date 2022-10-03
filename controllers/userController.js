const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const Investment = require("../models/investmentModel");
const Transaction = require("../models/transactionModel");
const Deposit = require("../models/depositModel");
// const Withdraw = require("../models/transactionModel");
const refCode = require("voucher-code-generator");
const sendEmail = require("../helpers/email");

///////////////////////////
///////register user///////
///////////////////////////

const registerUser = async (req, res) => {
  // destructuring all information from the object
  const { referral, username, name, email, phoneNumber, password } = req.body;

  if (referral) {
    const referredUser = await User.findOne({ referralId: referral });
    let referralCount = referredUser.referrals;
    referralCount += 1;
    await User.findOneAndUpdate(
      { referralId: referral },
      { referrals: referralCount }
    );
  }

  // validate inputs
  if (!username || !name || !email || !phoneNumber || !password) {
    res.status(400).json({ message: "please add all fields", error: true });
  }

  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: "User already Exists", error: true });
    return false;
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);
  const referralId = refCode.generate({ length: 5 }).toString();

  // create new user
  const user = new User({
    referralId,
    username,
    name,
    email,
    phoneNumber,
    password: hashedpassword,
  });

  // saving the user
  await user.save();

  if (user) {
    const { password, ...others } = user._doc;
    res.status(200).json({
      ...others,
      token: accessToken(user),
    });
  }

  await sendEmail(
    email,
    "Welcome On Board",
    `
  <div style="text-align: center;"> Welcome to Financial Freedom Investment!</div>
`
  );
};

/////////////////////////
////////login user///////
/////////////////////////

const loginUser = async (req, res) => {
  // destructuring the email and password from the object
  const { email, password } = req.body;

  // check for user email
  const user = await User.findOne({ email });

  // compare the password and send
  if (user && (await bcrypt.compare(password, user.password))) {
    const { password, ...others } = user._doc;
    res.send({
      ...others,
      token: accessToken(user),
    });
  } else {
    res.status(400).json({ message: "invalid credentials", error: true });
  }
};

///////////////////////////
///////get all users///////
///////////////////////////

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

//////////////////////////
///////generate jwt///////
//////////////////////////

// cassess token for particular user and admin functionality
const accessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
      email: user.email,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

/////////////////////////
////////update user//////
/////////////////////////

const updateUser = async (req, res) => {
  // destructuring the email and password from the object
  const { oldPassword, password, name, username } = req.body;
  if (password && oldPassword) {
    const user = await User.findById(req.user.id);

    // compare the password and send
    if (user && (await bcrypt.compare(oldPassword, user.password))) {
      // hash password
      const salt = await bcrypt.genSalt(10);
      const hashedpassword = await bcrypt.hash(password, salt);
      await User.findByIdAndUpdate(req.user.id, { password: hashedpassword });
      res.status(200).json({ message: "Password Changed Successfully" });
    } else {
      res
        .status(400)
        .json({ message: "Old Password is not correct", error: true });
    }
  }

  if (name) {
    await User.findByIdAndUpdate(req.user.id, { name: name });
    res.status(200).json({ message: "Name Changed Successfully" });
  }

  if (username) {
    await User.findByIdAndUpdate(req.user.id, { username: username });
    res.status(200).json({ message: "Username Changed Successfully" });
  }
};

/////////////////////////////
//////////Investment/////////
/////////////////////////////

const userInvest = async (req, res) => {
  let { amount, plan } = req.body;
  const { email, username, id } = req.user;
  amount = Number(amount);

  if (plan.toLowerCase().includes("starter")) {
    if (amount < 300) {
      return res
        .status(400)
        .json({ message: "The amount is smaller than the selected plan." });
    }
    if (amount > 75000) {
      return res
        .status(400)
        .json({ message: "The amount is larger than the selected plan." });
    }
  }

  if (plan.toLowerCase().includes("silver")) {
    if (amount < 75000) {
      return res
        .status(400)
        .json({ message: "The amount is smaller than the selected plan." });
    }
    if (amount > 100000) {
      return res
        .status(400)
        .json({ message: "The amount is larger than the selected plan." });
    }
  }

  if (plan.toLowerCase().includes("gold")) {
    if (amount < 100000) {
      return res
        .status(400)
        .json({ message: "The amount is smaller than the selected plan." });
    }
    if (amount > 1250000) {
      return res
        .status(400)
        .json({ message: "The amount is larger than the selected plan." });
    }
  }

  let user = await User.findById(id);
  let balance = user.balance;
  if (amount > balance || balance === 0)
    return res.status(400).json({
      message: "You don't have sufficient balance to make this investment",
    });

  const investOptions = {
    amount: amount,
    plan: plan,
  };

  const transactionOptions = {
    type: "investment",
    status: "pending",
  };

  let transactionId;
  let investmentId;

  Investment.create(investOptions, (err, investment) => {
    if (err) return res.status(400).json(err);

    investmentId = investment.id;
    investment.user.id = id;
    investment.user.email = email;
    investment.user.username = username;

    Transaction.create(transactionOptions, (err, transaction) => {
      if (err) return res.status(400).json(err);

      transactionId = transaction.id;
      transaction.user.id = id;
      transaction.user.email = email;
      transaction.user.username = username;

      User.findById(id, (err, user) => {
        if (err) return res.status(400).json(err);

        user.balance = user.balance - amount;

        let investments = user.investments;
        investments.push(investmentId);
        user.investments = investments;

        let transactions = user.transactions;
        transactions.push(transactionId);
        user.transactions = transactions;

        user.save();
      });

      transaction.save();
    });
    investment.save();
  });

  res.status(200).json({ message: "Investment Added Successfully" });
};

/////////////////////////////
///////////Deposit///////////
/////////////////////////////

const userDeposit = async (req, res) => {
  // destructuring all information from the object
  const { amount, mode } = req.body;

  // validate inputs
  if (!amount || !mode) {
    res.send({ message: "Please add all fields" });
  }

  // create new deposit
  const deposit = new Deposit({
    amount,
    mode,
  });

  // save deposit
  await deposit.save();
};

/////////////////////////////
///////////Withdraw//////////
/////////////////////////////

const userWithdraw = async (req, res) => {
  let user = await User.findById(id);

  let { amount } = req.body;
  const { email, username, id } = req.user;
  amount = Number(amount);

  if (amount > user.balance || balance === 0) {
    return res
      .status(400)
      .json({ message: "You do not have sufficient balance." });
  }

  const withdraw = {
    amount: amount,
  };

  const transactionOptions = {
    type: "withdraw",
    status: "pending",
  };

  let transactionId;
  let withdrawId;

  withdraw.create(withdraw, (err, withdraw) => {
    if (err) return res.status(400).json(err);

    withdrawId = withdraw.id;
    withdraw.user.id = id;
    withdraw.user.email = email;
    withdraw.user.username = username;

    Transaction.create(transactionOptions, (err, transaction) => {
      if (err) return res.status(400).json(err);

      transactionId = transaction.id;
      transaction.user.id = id;
      transaction.user.email = email;
      transaction.user.username = username;

      User.findById(id, (err, user) => {
        if (err) return res.status(400).json(err);

        user.balance = user.balance - amount;

        let withdraws = user.withdraws;
        withdraws.push(withdrawId);
        user.withdraws = withdraws;

        let transactions = user.transactions;
        transactions.push(transactionId);
        user.transactions = transactions;

        user.save();
      });

      transaction.save();
    });
    withdraw.save();
  });

  res
    .status(200)
    .json({ message: "Withdrawal has been initiated Successfully" });
};

const resetPassword = async (req, res, next) => {
  const id = req.headers.userid;
  const password = req.body.password;
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);
  const user = await User.findByIdAndUpdate(id, { password: hashedpassword });

  if (user)
    return res.status(200).json({ message: "Password reset is successful" });

  res
    .status(400)
    .json({ error: true, message: "An error occcurred, please try again" });
};

const forgotPasword = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email });

  // compare the password and send
  if (user) {
    await sendEmail(
      email,
      "Password Reset",
      `
    <div style="text-align: center;"> <a href="http://localhost:3000/reset-password/${user.id}">Reset Password</a></div>
  `
    );
    res.status(200).json({ message: "An email has been sent to you" });
  } else {
    res.status(400).json({
      message: "We could not find an account with that email",
      error: true,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUsers,
  updateUser,
  userInvest,
  userDeposit,
  userWithdraw,
  resetPassword,
  forgotPasword,
};
