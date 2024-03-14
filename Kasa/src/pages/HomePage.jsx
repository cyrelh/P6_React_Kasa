import Banner from '../components/Banner.jsx'
import ImgHomeBanner from '../assets/home-banner.png'
import '../styles/HomePage.scss'

import CardApartments from '../components/CardApartments.jsx'
import { Link } from 'react-router-dom' //pour créer des liens vers d'autres pages de l'application
import { useEffect, useState } from 'react'




function HomePage() {
  const [logements, setLogements] = useState([])   // Utilisation du hook pour gérer l'état des logements (utilisé pour effectuer des appels réseau après le rendu initial)

  useEffect(() => { // Utilisation du hook pour effectuer une action après le premier rendu
    fetch('./logements.json')     // Récupération des data logements depuis le package JSON à l'aide de l'API fetch
    .then(response => response.json()) // convertit la réponse HTTP en format JSON
    .then((data) => setLogements(data))       // Met à jour l'état `logements` du composant HomePage avec les données JSON récupérées
    .catch((error) => console.log(error)) //Si erreurs éventuelles , on les affiche dans la console
},[]) // tableau vide indique que useEffect ne s'exécute qu'une seule fois après le premier rendu

  return (   // Rendu du composant HomePage
    <div>      
              <Banner img={ImgHomeBanner} title='Chez vous, partout et ailleurs'/>       {/* Rendu du composant Banner avec l'image et le titre spécifiés */}
              <main>
                <div className='conteneur-logements'>
                  
                  {logements.map(logement => { {/* méthode map pour itérer sur chaque élément du tableau logements et rendu de chaque carte de logement*/}
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

export default HomePage // exportation du composant pour le réutiliser ailleurs dans l'app React