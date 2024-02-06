import Footer_Kasa from '../assets/logo-kasa-footer.png'
import '../styles/Footer.scss'

function Footer() {
  return (
    <footer>
        <div className='footer-kasa'>
            <div className='footer-logo'>
                <img src={Footer_Kasa} alt="Logo kasa pour le footer" className='footer-img-kasa' />
                <p>© 2020 Kasa. All rights reserved</p>

            </div>
        </div>
    </footer>

  )
}

export default Footer