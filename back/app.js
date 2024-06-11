const express = require('express');
const app = express();
const mongoose = require('mongoose');
const articleRoutes = require('./articleRoutes');

// Middleware pour traiter les données de requête
app.use(express.json());


app.use('/api/articles', articleRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/actualite', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(err => console.error('Erreur de connexion à MongoDB :', err));


