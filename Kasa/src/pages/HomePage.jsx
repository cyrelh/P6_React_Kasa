import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import ImgHomeBanner from '../assets/home-banner.png'
import Footer from '../components/Footer.jsx'


// import "../styles/HomePage.scss"

function HomePage() {
  return (
    <div>
              <Header/>
              <Banner img={ImgHomeBanner} title="Chez vous, partout et ailleurs"/>
              <Footer/>


    </div>
  )
}

export default HomePage