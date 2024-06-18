const Article = require('./../Models/articleModel');

// Fonctions de contrôleur pour les articles
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des articles' });
    }
};

exports.createArticle = async (req, res) => {
    try {
        const nouvelArticle = new Article(req.body);
        await nouvelArticle.save();
        res.status(201).json({ message: 'Article créé avec succès', article: nouvelArticle });
    } catch (error) {
        console.error('Erreur lors de la création de l\'article :', error);
        res.status(500).json({ message: 'Erreur lors de la création de l\'article' });
    }
};

exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article non trouvé' });
        }
        res.status(200).json(article);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'article par ID :', error);
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'article par ID' });
    }
};

exports.updateArticle = async (req, res) => {
    try {
        const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!article) {
            return res.status(404).json({ message: 'Article non trouvé' });
        }
        res.status(200).json({ message: 'Article mis à jour avec succès', article });
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'article :', error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'article' });
    }
};

exports.deleteArticle = async (req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article non trouvé' });
        }
        res.status(200).json({ message: 'Article supprimé avec succès', article });
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'article :', error);
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'article' });
    }
};
