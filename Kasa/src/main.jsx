// Importation de React depuis la bibliothèque 'react'
import React from 'react'
// Importation de ReactDOM depuis le module 'react-dom/client'
import ReactDOM from 'react-dom/client'
// Importation du composant fonctionnel principal App depuis le chemin spécifié
import App from '../src/components/App.jsx'


// Création d'une racine React à l'élément avec l'ID 'root' dans le document
// Cette méthode crée une racine React pour le rendu, ce qui permet une mise à jour efficace du DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  //mode Strict de React pour détecter les problèmes potentiels dans le code
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
