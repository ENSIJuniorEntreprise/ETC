const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }, // Le lien vers l'image
    datePublication: { type: Date, default: Date.now } 
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
