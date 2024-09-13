import nodemailer from 'nodemailer';

// create transporter object using the default SMTP transport

// send mail function
export default async function sendMail(config) {
  let transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ATENDIMENTO_EMAIL, 
      pass: process.env.APP_PASSWORD 
    },
    tls: {
      rejectUnauthorized: false
    }
  });


  let mailOptions = {
    from: config.to,  // sender emailmarcelo
    to: `${process.env.MARCELO_EMAIL}, ${process.env.GABRIEL_EMAIL}, ${process.env.DANIEL_EMAIL}`, // destination email
    subject: config.subject, 
    text: config.text 
  };
  console.log('mails options from sendEmail code',mailOptions)

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info
  } catch (error) {
    console.error('Error sending email: ', error);
  }
}
