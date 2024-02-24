import Banner from '../components/Banner.jsx'
import ImgHomeBanner from '../assets/home-banner.png'
import '../styles/HomePage.scss'

import CardApartments from '../components/CardApartments.jsx'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'




function HomePage() {
  const [logements, setLogements] = useState([])   // Utilisation de useState pour gérer l'état des logements

  useEffect(() => { //  // Utilisation du hook useEffect pour effectuer une action après le premier rendu
    fetch('./logements.json') //    // Récupération des données des logements depuis le fichier JSON
    .then(response => response.json()) // convertit la réponse HTTP en format JSON
    .then((data) => setLogements(data)) //Met à jour l'état `logements` du composant HomePage avec les données JSON récupérées
    .catch((error) => console.log(error)) //Si erreurs éventuelles , on les affiche dans la console
},[])

  return (
    <div>      
              <Banner img={ImgHomeBanner} title='Chez vous, partout et ailleurs'/>       {/* Rendu du composant Banner avec l'image et le titre spécifiés */}
              <main>
                <div className='conteneur-logements'>
                  {/* Mapping sur les logements et rendu de chaque carte de logement 
                  méthode map pour itérer sur chaque élément du tableau logements. Pour chaque logement, la fonction fléchée est exécutée.*/}
                  {logements.map(logement => {
                        return(
                            <Link to={`logement/${logement.id}`} key={logement.id} className='click-card'>
                              {/*Cette partie enveloppe la carte de logement dans un composant Link, créant un lien vers la page de détail du logement
                              L'attribut to => URL  destination basée sur ID unique de chaque logement
                              L'attribut key ==> aide React à identifier chaque élément de la liste de manière unique  (good for performance)*/}
                                <CardApartments cover={logement.cover} title={logement.title}/>
                                {/*props cover et title sont passées au composant --> spécifie img de couverture et titre du logement */}
                            </Link>
                        )
                    })
                  }
                </div>
              </main>
    </div>
  )
}

export default HomePage