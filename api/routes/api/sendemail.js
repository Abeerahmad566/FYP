const nodemailer = require('nodemailer');

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: config.get("EMAIL_SERVICE"),
    auth: {
      user: config.get("EMAIL_ADDRESS"),
      pass: config.get("EMAIL_PASSWOR"),
    },
  });

  const mailOptions = {
    from: config.get("EMAIL_ADDRESS"),
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log('Error Ocuured ' + err);
    } else {
      console.log('Email Send Successfully' + info.response);
    }
  });
};
module.exports = sendEmail;