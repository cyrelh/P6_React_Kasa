import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import ImgAboutBanner from '../assets/about-banner.png'
import Footer from '../components/Footer.jsx'


function About() {
  return (
    <div>    <Header/>
    <Banner img={ImgAboutBanner}/>

    <Footer/>
    </div>

  )
}

export default About