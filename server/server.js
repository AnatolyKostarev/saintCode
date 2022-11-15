const express = require('express')
const nodemailer = require('nodemailer')

const app = express()
const cors = require('cors')
require('dotenv').config()

const port = 5000

// middleware
app.use(express.json())
app.use(cors())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
})

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`🚀 Server is ready to take messages: ${success}`)
})

app.post('/send', async (res, req) => {
  const mailOptions = {
    from: `${res.body.value.email}`,
    to: process.env.EMAIL,
    subject: `Сообщение от пользователя ${res.body.value.name}`,
    html: `<p>Здравствуйте! Перезвоните мне по номеру ${res.body.value.tel}</p>
    <p>Или отправьте сообщение по email ${res.body.value.email}</p>
    <p>Сообщение: ${res.body.value.message}</p>`,
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      req.json({
        status: 'fail',
      })
    } else {
      console.log('Email sent successfully')
      req.json({
        status: 'success',
      })
    }
  })
})

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`)
})
