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

// Importation des composants Header et Footer - méthode de factorisation pour ne plus les appeler à chaque fois dans les .jsx du dossier pages
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'

// On crée la racine de l'app React dans l'élément HTML avec l'ID 'root' (pour le rendu ce qui permet une mise à jour efficace du DOM)
ReactDOM.createRoot(document.getElementById('root')).render(
  //mode Strict de React pour détecter/signaler les problèmes potentiels dans le code
  <React.StrictMode> 
    <BrowserRouter>            {/* utilisé pour configurer les fonctionnalités de navigation de l'app */}
      <Header />             {/* ajouté à chaque page pour assurer une structure cohérente */} 
      <Routes>                  {/* définit les différentes routes de l'app */}
        <Route path="/" element={<HomePage />} />           {/* Chaque <Route> a un chemin (path) et un élément (element) associé. */}
        <Route path="/about" element={<About />} />          
        <Route path="/logement/:id" element={<ApartmentPage/>} />   {/* route dynamique pour pages d'appartement et :id comme paramètre pour identifier un appartement spécifique*/}
        <Route path="*" element={<ErrorPage />}/>    {/* la route '*' correpsond à page Erreur ErrorPage pour gérer les erreurs 404 ou d'autres routes inattendues*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
