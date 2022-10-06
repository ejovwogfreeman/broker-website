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
    //     `
    //   <div style="text-align: center;"> Welcome to Financial Freedom Investment!</div>
    // `
    `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title>New email template 2022-10-06</title><!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- -->
<link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
<style type="text/css">
#outlook a {
padding:0;
}
.ExternalClass {
width:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height:100%;
}
.es-button {
mso-style-priority:100!important;
text-decoration:none!important;
}
a[x-apple-data-detectors] {
color:inherit!important;
text-decoration:none!important;
font-size:inherit!important;
font-family:inherit!important;
font-weight:inherit!important;
line-height:inherit!important;
}
.es-desk-hidden {
display:none;
float:left;
overflow:hidden;
width:0;
max-height:0;
line-height:0;
mso-hide:all;
}
[data-ogsb] .es-button {
border-width:0!important;
padding:15px 25px 15px 25px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style>
</head>
<body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;padding:0;Margin:0">
<div class="es-wrapper-color" style="background-color:#F4F4F4"><!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
<v:fill type="tile" color="#f4f4f4"></v:fill>
</v:background>
<![endif]-->
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
<tr class="gmail-fix" height="0" style="border-collapse:collapse">
<td style="padding:0;Margin:0">
<table cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px">
<tr style="border-collapse:collapse">
<td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img src="https://ycherv.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px" alt width="600" height="1"></td>
</tr>
</table></td>
</tr>
<tr style="border-collapse:collapse">
<td valign="top" style="padding:0;Margin:0">
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td style="padding:0;Margin:0;background-color:#253265" bgcolor="#253265" align="center">
<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;width:600px">
<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation">
<tr style="border-collapse:collapse">
<td align="center" bgcolor="#253265" style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px"><h1 style="Margin:0;line-height:58px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:48px;font-style:normal;font-weight:normal;color:#111111"><br></h1></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td style="padding:0;Margin:0;background-color:#40fee1" bgcolor="#40fee1" align="center">
<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;width:600px">
<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation">
<tr style="border-collapse:collapse">
<td align="center" style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px"><h1 style="Margin:0;line-height:58px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:48px;font-style:normal;font-weight:normal;color:#111111">Welcome On Board!</h1><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px"><br></p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;width:600px">
<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#ffffff" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation">
<tr style="border-collapse:collapse">
<td class="es-m-txt-l" bgcolor="#ffffff" align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">Welcomoe to Financial Freedom Investment Company. We're excited to have you get started.</p></td>
</tr>
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://ycherv.stripocdn.email/content/guids/3841bcb0-c351-4894-94fe-441d0d664043/images/logo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="50"></td>
</tr>
<tr style="border-collapse:collapse">
<td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">If you have any questions, just reply to this email—we're always happy to help out.</p></td>
</tr>
<tr style="border-collapse:collapse">
<td class="es-m-txt-l" align="left" style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">Cheers,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">The Financial Freedom Investment Team</p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;width:600px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0">
<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td style="padding:0;Margin:0;border-bottom:1px solid #f4f4f4;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;width:600px">
<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#bdecf1;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#bdecf1" role="presentation">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;padding-top:30px;padding-left:30px;padding-right:30px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#111111">Need more help?</h3><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">We're here, ready to help.<br><br></p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
<tr style="border-collapse:collapse">
<td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:30px;padding-right:30px">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;width:540px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;padding-top:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666;font-size:14px">You received this email because you just signed up for a new account.</p></td>
</tr>
<tr style="border-collapse:collapse">
<td align="left" style="padding:0;Margin:0;padding-top:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666;font-size:14px">&nbsp;375 Raritan Center Parkway Edison, NJ 08837 United States.</p></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0">
<table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
<tr style="border-collapse:collapse">
<td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
<table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td valign="top" align="center" style="padding:0;Margin:0;width:560px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
<tr style="border-collapse:collapse">
<td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://ycherv.stripocdn.email/content/guids/3841bcb0-c351-4894-94fe-441d0d664043/images/logo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="50"></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
</div>
</body>
</html>    
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

///////////////////////////
///////get one users///////
///////////////////////////

const getUser = async (req, res) => {
  res.status(200).json(req.user);
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
      //   `
      //   <div style="text-align: center;"> <a href="http://localhost:3000/reset-password/${user.id}">Reset Password</a></div>
      //   `
      `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
      <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title>New Template</title><!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
      <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <style type="text/css">
      #outlook a {
      padding:0;
      }
      .es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
      }
      a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
      }
      .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
      }
      [data-ogsb] .es-button {
      border-width:0!important;
      padding:10px 20px 10px 20px!important;
      }
      .es-button-border:hover a.es-button, .es-button-border:hover button.es-button {
      background:#56d66b!important;
      border-color:#56d66b!important;
      }
      .es-button-border:hover {
      border-color:#42d159 #42d159 #42d159 #42d159!important;
      background:#56d66b!important;
      }
      @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
      </style>
      </head>
      <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
      <div class="es-wrapper-color" style="background-color:#F6F6F6"><!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
      <v:fill type="tile" color="#f6f6f6"></v:fill>
      </v:background>
      <![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
      <tr class="gmail-fix" height="0">
      <td style="padding:0;Margin:0">
      <table cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px">
      <tr>
      <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img src="https://ycherv.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px" alt width="600" height="1"></td>
      </tr>
      </table></td>
      </tr>
      <tr>
      <td valign="top" style="padding:0;Margin:0">
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr>
      <td style="padding:0;Margin:0;background-color:#253265" bgcolor="#253265" align="center">
      <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
      <tr>
      <td align="left" style="padding:0;Margin:0">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
      <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation">
      <tr>
      <td align="center" bgcolor="#253265" style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333"><br></h1><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr>
      <td style="padding:0;Margin:0;background-color:#40fee1" bgcolor="#40fee1" align="center">
      <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
      <tr>
      <td align="left" style="padding:0;Margin:0">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
      <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation">
      <tr>
      <td align="center" style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333">Reset Your Password</h1><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px"><br></p></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
      <tr>
      <td align="left" style="padding:0;Margin:0">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
      <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#ffffff" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation">
      <tr>
      <td class="es-m-txt-l" bgcolor="#ffffff" align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">You are here because you want to reset your password. <a href="http://localhost:3000/reset-password/${user.id}">click here</a> to&nbsp;reset your password</p></td>
      </tr>
      <tr>
      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://ycherv.stripocdn.email/content/guids/3841bcb0-c351-4894-94fe-441d0d664043/images/logo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="50"></td>
      </tr>
      <tr>
      <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">If you have any questions, just reply to this email—we're always happy to help out.</p></td>
      </tr>
      <tr>
      <td class="es-m-txt-l" align="left" style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Cheers,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">The Financial Freedom Investment Team</p></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
      <tr>
      <td align="left" style="padding:0;Margin:0">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0">
      <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td style="padding:0;Margin:0;border-bottom:1px solid #f4f4f4;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
      <tr>
      <td align="left" style="padding:0;Margin:0">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
      <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#bdecf1;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#bdecf1" role="presentation">
      <tr>
      <td align="center" style="padding:0;Margin:0;padding-top:30px;padding-left:30px;padding-right:30px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#111111">Need more help?</h3><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">We're here, ready to help.<br><br></p></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
      <tr>
      <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:30px;padding-right:30px">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td valign="top" align="center" style="padding:0;Margin:0;width:540px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="left" style="padding:0;Margin:0;padding-top:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">You received this email because you just signed up for a new account.</p></td>
      </tr>
      <tr>
      <td align="left" style="padding:0;Margin:0;padding-top:25px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">&nbsp;375 Raritan Center Parkway Edison, NJ 08837 United States.</p></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
      <tr>
      <td align="center" style="padding:0;Margin:0">
      <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
      <tr>
      <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
      <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
      <tr>
      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://ycherv.stripocdn.email/content/guids/3841bcb0-c351-4894-94fe-441d0d664043/images/logo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="50"></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table></td>
      </tr>
      </table>
      </div>
      </body>
      </html>
      
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
  getUser,
};
