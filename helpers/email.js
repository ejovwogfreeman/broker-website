const nodemailer = require("nodemailer");
const EmailModel = require("../models/emailModel");
const User = require("../models/userModel");

const email = async (reciever, subject, body) => {
  let transporter = nodemailer.createTransport({
    host: "mail.financialfreedominvestment.co",
    port: 465,
    secure: true,
    auth: {
      user: "mail@financialfreedominvestment.co",
      pass: "ejgift12345#",
    },
  });

  let info = await transporter.sendMail({
    from: '"Financial Freedom Investment" <mail@financialfreedominvestment.co>',
    to: reciever,
    subject: subject,
    html: body,
  });

  let user = await User.findOne({ email: reciever });

  const emailOptions = {
    email: info,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
    },
  };

  const newEmail = new EmailModel(emailOptions);

  await newEmail.save().then(async (mail) => {
    let mails = user.mail;
    mails.push(mail.id);

    await User.findOneAndUpdate(
      { email: user.email },
      {
        mail: mails,
      }
    );
  });
};

module.exports = email;
