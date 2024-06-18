const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const config = require('./config'); // Import the configuration file
const mongoose = require('mongoose');
const articleRoutes = require('./Routers/articleRoutes');

// Middleware pour traiter les données de requête
app.use(express.json());


app.use('/api/articles', articleRoutes);

app.use(bodyParser.json());
    
app.post('/send-email', async (req, res) => {
  try {
    const { Prenom, Nom, Email, message } = req.body;

    const transporter = nodemailer.createTransport(config.emailConfig);

    const mailOptions = {
      from: config.fromEmail,
      to: Email,
      subject: `Email de la part du site de l'ETC`, 
      html: `<h1>Bonjour,</h1>
            <p>Merci d'avoir effectué un achat de :</p>
*            <p>${message}</p>
            <p>${Prenom}${Nom}</p>`,
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

// Démarrer le serveur
const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://ketata15selim:pPdKZCRTMhcYC6vn@cluster0.3hzj3qu.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(err => console.error('Erreur de connexion à MongoDB :', err));



    
