import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { createConnection } from 'net'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/test-smtp', async (req, res) => {
  const results = []
  const ports = [587, 465, 25]
  for (const port of ports) {
    try {
      await new Promise((resolve, reject) => {
        const socket = createConnection({ port, host: 'smtp-relay.sendinblue.com', timeout: 3000 })
        socket.on('connect', () => { socket.destroy(); resolve() })
        socket.on('error', reject)
        socket.on('timeout', () => { socket.destroy(); reject(new Error('timeout')) })
      })
      results.push({ port, reachable: true })
    } catch {
      results.push({ port, reachable: false })
    }
  }
  // Test auth
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: { user: process.env.BREVO_SMTP_USER, pass: process.env.BREVO_SMTP_KEY },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000,
  })
  try {
    await transporter.verify()
    results.push({ auth: 'verified' })
  } catch (e) {
    results.push({ auth: e.code || e.message, authMessage: e.message })
  }
  res.json(results)
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_KEY,
      },
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 8000,
    })

    await transporter.sendMail({
      from: `"Vishnu Sabari" <${process.env.BREVO_EMAIL_FROM}>`,
      to: process.env.BREVO_EMAIL_TO,
      replyTo: email,
      subject: `Portfolio: ${subject}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; padding: 24px;">
          <h2 style="color: #0F172A; margin-bottom: 16px;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748B; width: 80px;">Name</td><td style="padding: 8px 0; color: #0F172A; font-weight: 500;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748B;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748B;">Subject</td><td style="padding: 8px 0; color: #0F172A; font-weight: 500;">${subject}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #F8FAFC; border-radius: 12px; border: 1px solid rgba(15,23,42,0.08);">
            <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    })

    res.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    const msg =
      error.code === 'EAUTH'
        ? 'Login failed. In .env, set BREVO_SMTP_USER to your Brevo account email (the one you log in with at brevo.com).'
        : error.code === 'ESOCKET'
        ? 'Connection refused. Port 465 may be blocked on your network.'
        : 'Failed to send message.'
    res.status(500).json({ error: msg })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`SMTP user: ${process.env.BREVO_SMTP_USER}`)
  console.log(`From: ${process.env.BREVO_EMAIL_FROM}`)
})
