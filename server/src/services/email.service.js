const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

exports.sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: `"LMS Team" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html
  };

  return transporter.sendMail(mailOptions);
};
