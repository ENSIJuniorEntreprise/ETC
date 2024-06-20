const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const config = require('./config');
const articleRoutes = require('./Routers/articleRoutes');
const authRouter = require('./Routers/authRouter');
const credentials = require('./middleware/credentials');
const refreshRouter = require('./Routers/refreshRouter');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(credentials);

app.use('/auth', authRouter);
app.use('/api/articles', articleRoutes);
app.use('/refresh', refreshRouter);
app.post('/send-email', async (req, res) => {
  try {
    const { Prenom, Nom, Email, message } = req.body;
    const transporter = nodemailer.createTransport(config.emailConfig);
    const mailOptions = {
      from: config.fromEmail,
      to: Email,
      subject: 'Email de la part du site de l\'ETC',
      html: `<h1>Bonjour,</h1><p>Merci d'avoir effectué un achat de :</p><p>${message}</p><p>${Prenom}${Nom}</p>`,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
