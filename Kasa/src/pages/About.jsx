// import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import ImgAboutBanner from '../assets/about-banner.png' // Import de l'image de la bannière
// import Footer from '../components/Footer.jsx'
import Collapse from '../components/Collapse.jsx' //Import du composant Collapse




function About() {
  return (
    <div>    
      {/* <Header/> */}
    <Banner img={ImgAboutBanner}/>
    <div className='conteneur-collapse'> {/* Début de la div pour contenir les composants Collapse */}
      {data.map((item) => ( // on utilise la méthode map pour parcourir chaque élément du tableau data
        <Collapse key={item.name} name={item.name} para={item.reponse} /> 
      // Pour chaque élément, on crée composant Collapse en passant le nom de la section (item.name) comme titre et le contenu de la section (item.reponse) comme propriété au composant.
      ))}
    </div>

    {/* <Footer/> */}
    </div>

  )
}
// Définition des données à afficher dans les composants Collapse
const data = [
  {
    name: 'Fiabilité',
    reponse:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
  },
  {
    name: 'Respect',
    reponse:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    name: 'Service',
    reponse:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    name: 'Sécurité',
    reponse:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }

]

export default About