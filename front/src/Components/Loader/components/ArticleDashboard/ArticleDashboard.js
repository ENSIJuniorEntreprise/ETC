import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ArticleDashboard.css';

const ArticleDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [formState, setFormState] = useState({
    titre: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles :', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      // Handle image file input
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState({ ...formState, image: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentArticle) {
      await updateArticle(currentArticle._id, formState);
    } else {
      await createArticle(formState);
    }
    setFormState({ titre: '', description: '', image: '' });
    setCurrentArticle(null);
    fetchArticles();
  };

  const createArticle = async (article) => {
    try {
      await axios.post('http://localhost:8000/api/articles', article);
    } catch (error) {
      console.error('Erreur lors de la création de l\'article :', error);
    }
  };

  const updateArticle = async (id, article) => {
    try {
      await axios.put(`http://localhost:8000/api/articles/${id}`, article);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'article :', error);
    }
  };

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/articles/${id}`);
      fetchArticles();
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'article :', error);
    }
  };

  const editArticle = (article) => {
    setCurrentArticle(article);
    setFormState(article);
  };

  return (
    <div className="article-dashboard">
      <h1>Articles</h1>
      <form onSubmit={handleSubmit} className="article-form">
        <div className="form-group">
          <label>Titre:</label>
          <input
            type="text"
            name="titre"
            value={formState.titre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formState.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL or Upload:</label>
          <input
            type="text"
            name="image"
            value={formState.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
          {formState.image && (
            <img src={formState.image} alt="Preview" width="100" />
          )}
        </div>
        <button type="submit">{currentArticle ? 'Update' : 'Create'}</button>
      </form>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article._id} className="article-item">
            <h2>{article.titre}</h2>
            <p>{article.description}</p>
            <img src={article.image} alt={article.titre} width="100" />
            <div className="button-group">
              <button onClick={() => editArticle(article)}>Edit</button>
              <button onClick={() => deleteArticle(article._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleDashboard;
