import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'; // Import ToastProvider
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <ToastProvider
      autoDismiss
      autoDismissTimeout={5000} // Timeout par défaut pour la disparition automatique des toasts (5 secondes)
      placement="bottom-right" // Position des toasts (en haut à droite)
      toastSpacing={1} // Espacement vertical entre les toasts (en pixels)
    >
      <App />
    </ToastProvider>
  </Router>
);
