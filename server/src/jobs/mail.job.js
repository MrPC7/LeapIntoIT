const nodemailer = require('nodemailer');

exports.sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"LMS Team" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html
  });
};
