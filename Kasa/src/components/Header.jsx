import Kasa from '../assets/logo-kasa.png'
import '../styles/Header.scss'

function Header() {
  return (
    <header className='header'>
        <div className='under-header'>
            <img src={Kasa} alt="Logo de Kasa" className='logo-kasa' />

        </div>
        
    </header>
  )
}

export default Header