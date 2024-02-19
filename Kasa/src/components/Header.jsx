import { NavLink } from 'react-router-dom'// Importation du composant NavLink depuis 'react-router-dom'
import Kasa from '../assets/logo-kasa.png'
import '../styles/Header.scss'

function Header() {
  return (
    <header className='header'>
        <div className='under-header'>
          <NavLink to="/">
                <img src={Kasa} alt="Logo de Kasa" className='logo-kasa' />
          </NavLink>
            <nav className="nav-links">
                    <NavLink className={({ isActive }) => isActive ? "active" : "accueil"} to="/" >Accueil</NavLink> 
                    {/*isActive = fonction qui retourne true si le lien est actif, cad s'il est au chemin de l'URL actuel. */}
                    {/*Si le lien est actif, la classe "active" est appliquée ; sinon, la classe "accueil"  */}
                    <NavLink className={({ isActive }) => isActive ? "active" : "propos"} to="/about">A Propos</NavLink>
                    {/*Utilisation de NavLink pour créer des liens de navigation réactifs. Le 1er NavLink => page d'accueil et le 2nd => "A Propos".*/}
            </nav>
        </div>
        
    </header>
  )
}

export default Header