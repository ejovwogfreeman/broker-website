////////////////////////////////////
///////////process Withdraw/////////
////////////////////////////////////

const processWithdraw = async (req, res) => {
  const { id } = req.body;
  const withdraw = await Withdrawal.findByIdAndUpdate(id, {
    status: "processing",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: withdraw.id },
    {
      status: "processing",
    }
  );
  res.status(200).json("processing Successfully");
};

////////////////////////////////////
///////////Confirm Withdraw//////////
////////////////////////////////////

const confirmWithdraw = async (req, res) => {
  const { id } = req.body;
  const withdraw = await Withdrawal.findByIdAndUpdate(id, {
    status: "confirmed",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: withdraw.id },
    {
      status: "confirmed",
    }
  );

  let userid = transaction.user.id;

  const user = await User.findById(userid);

  const bal = Number(user.balance) - Number(withdraw.amount);

  await User.findByIdAndUpdate(userid, {
    balance: Number(bal),
  });
  res.status(200).json("Confirmed Successfully");
};

////////////////////////////////////
///////////decline Withdraw/////////
////////////////////////////////////

const declineWithdraw = async (req, res) => {
  const { id } = req.body;
  const withdraw = await Withdrawal.findByIdAndUpdate(id, {
    status: "declined",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: withdraw.id },
    {
      status: "declined",
    }
  );
  res.status(200).json("declined Successfully");
};

////////////////////////////////////
///////////process Deposit//////////
////////////////////////////////////

const processDeposit = async (req, res) => {
  const { id } = req.body;
  const deposit = await Deposit.findByIdAndUpdate(id, {
    status: "processing",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: deposit.id },
    {
      status: "processing",
    }
  );
  res.status(200).json("processing Successfully");
};

////////////////////////////////////
///////////Confirm Deposit//////////
////////////////////////////////////

const confirmDeposit = async (req, res) => {
  const { id } = req.body;
  const deposit = await Deposit.findByIdAndUpdate(id, {
    status: "confirmed",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: deposit.id },
    {
      status: "confirmed",
    }
  );

  let userid = transaction.user.id;

  const user = await User.findById(userid);

  const bal = Number(user.balance) + Number(deposit.amount);

  await User.findByIdAndUpdate(userid, {
    balance: Number(bal),
  });
  res.status(200).json("Confirmed Successfully");
};

////////////////////////////////////
///////////decline Deposit//////////
////////////////////////////////////

const declineDeposit = async (req, res) => {
  const { id } = req.body;
  const deposit = await Deposit.findByIdAndUpdate(id, {
    status: "declined",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: deposit.id },
    {
      status: "declined",
    }
  );
  res.status(200).json("declined Successfully");
};
