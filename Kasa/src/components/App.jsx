// Importation des composants nécessaires depuis 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importation des composants fonctionnels des pages
import HomePage from '../pages/HomePage.jsx'
import About from '../pages/About.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import ApartmentPage from "../pages/ApartmentPage.jsx"

// Importation des styles pour l'app
import '../styles/App.scss'

// Définition du composant fonctionnel principal App
function App() {

  return (
        // Utilisation de la syntaxe du Fragment React (<> et </>) pour éviter des éléments div inutiles
    <> 
      <BrowserRouter>            {/* Config du BrowserRouter, qui donne des features de navigation pour l'app */}
        <Routes>                  {/* Déf du composant Routes, qui gère les routes de l'app */}
          <Route path="/" element={<HomePage />} />           {/* Config de Route pour la page d'accueil, rendant le composant HomePage lorsque le chemin est '/' */}
          <Route path="/about" element={<About />} />          {/* Config de Route pour la page "About", rendant le composant About lorsque le chemin est '/about' */}
          <Route path="/apartment/:id" element={<ApartmentPage/>} />   {/* Config de Route dynamique pour appartement, rendant ApartmentPage qd chemin est à '/apartment/:id', ':id' = paramètre de l'identifiant de l'appartement*/}
          <Route path="*" element={<ErrorPage />}/>    {/* Config de Route pour tous les autres chemins qui ne correspondent pas aux précédents, rendant le ErrorPage pour gérer les erreurs 404 ou d'autres routes inattendues*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
