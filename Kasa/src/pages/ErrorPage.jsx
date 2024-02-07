import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/ErrorPage.scss'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <Header />
        <div className='error'>
          <div className='404'>404</div>
          <div className='oups'><p>Oups! La page que vous demandez n'existe pas.</p></div>
          <NavLink to='/' className='error-accueil'>Retourner sur la page d’accueil</NavLink>   {/* Définition d'un lien de redirection vers la page d'accueil */}

        </div>
      <Footer/>
      
    </div>
  )
}

export default ErrorPage