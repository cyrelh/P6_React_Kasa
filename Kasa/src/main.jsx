// Importation de React depuis la bibliothèque 'react'
import React from 'react'
// Importation de ReactDOM depuis le module 'react-dom/client'
import ReactDOM from 'react-dom/client'
// Importation des composants nécessaires depuis 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Importation des composants fonctionnels des pages
import HomePage from '/src/pages/HomePage.jsx'
import About from '/src/pages/About.jsx'
import ErrorPage from '/src/pages/ErrorPage.jsx'
import ApartmentPage from "/src/pages/ApartmentPage.jsx"
// Importation des styles pour l'app
import '/src/styles/main.scss'

// Création d'une racine React à l'élément avec l'ID 'root' dans le document
// Cette méthode crée une racine React pour le rendu, ce qui permet une mise à jour efficace du DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  //mode Strict de React pour détecter les problèmes potentiels dans le code
  <React.StrictMode> 
    <BrowserRouter>            {/* Config du BrowserRouter, qui donne des features de navigation pour l'app */}
      <Routes>                  {/* Déf du composant Routes, qui gère les routes de l'app */}
        <Route path="/" element={<HomePage />} />           {/* Config de Route pour la page d'accueil, rendant le composant HomePage lorsque le chemin est '/' */}
        <Route path="/about" element={<About />} />          {/* Config de Route pour la page "About", rendant le composant About lorsque le chemin est '/about' */}
        <Route path="/logement/:id" element={<ApartmentPage/>} />   {/* Config de Route dynamique pour appartement, rendant ApartmentPage qd chemin est à '/apartment/:id', ':id' = paramètre de l'identifiant de l'appartement*/}
        <Route path="*" element={<ErrorPage />}/>    {/* Config de Route pour tous les autres chemins qui ne correspondent pas aux précédents, rendant le ErrorPage pour gérer les erreurs 404 ou d'autres routes inattendues*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
