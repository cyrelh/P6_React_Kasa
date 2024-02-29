// import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import ImgAboutBanner from '../assets/about-banner.png' // Import de l'image de la bannière
// import Footer from '../components/Footer.jsx'
import Collapse from '../components/Collapse.jsx' //Import du composant Collapse
import '../styles/About.scss'


function About() {

  const textFiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  const textRespect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const textService = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const textSecurite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

  return (
    <div className="about-div">
      <Banner img={ImgAboutBanner}></Banner>
      <div className='values'>
      <Collapse titre={'Fiabilité'} texte={textFiabilite}></Collapse>
      <Collapse titre={'Respect'} texte={textRespect}></Collapse>
      <Collapse titre={'Service'} texte={textService}></Collapse>
      <Collapse titre={'Sécurité'} texte={textSecurite}></Collapse>
      </div>
    </div>
  )
}

export default About