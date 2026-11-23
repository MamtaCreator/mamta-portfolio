import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The production build ships prerendered HTML (see prerender.js); dev starts empty
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
