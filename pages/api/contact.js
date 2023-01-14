export default async function handler (req, res) {
  require('dotenv').config()
  const nodemailer = require('nodemailer')
  console.log(process.env)
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.email,
      pass: process.env.password
    },
    secure: true
  })
  const mailData = {
    from: process.env.email,
    to: process.env.personalEmail,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  try {
    await transporter.sendMail(mailData)
    res.status(200).json({ message: 'Message sent successfully' })
  } catch (error) {
    res.status(400).json(error)
  }
}
