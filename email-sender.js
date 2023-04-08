//npm install nodemailer
var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "///", // sender email
    pass: "///", // sender password
  },
});
var mailOptions = {
  from: "///", // sender email
  to: "///", // list of receivers
  subject: "nodetest",
  text: "Test Email",
};
transporter.sendMail(mailOptions, (err, info) => {
  if (err) console.log(err);
  else console.log("message sent ", info.response);
});