import React from 'react'
import { useEffect, useState } from 'react'
import Slideshow from '../components/Slideshow.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Collapse from '../components/Collapse.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import '../styles/ApartmentPage.scss'



function ApartmentPage() {
  const [logement, setLogement] = useState({}) // on déclare un état local nommé logement avec une valeur initiale de {} (un objet vide)
  //logement va contenir les données récupérées à partir de la requête fetch
  
  const {id} = useParams(); //onction useParams() fournie par React Router pour extraire les paramètres d'URL
  //Dans ce cas, id est extrait des paramètres d'URL. Par exemple, si l'URL est "/logement/123", id contiendra la valeur "123"
    useEffect(() => { // ce hook est déclenché chaque fois que la valeur de id change
      //Dans ce cas, il déclenche une requête fetch pour récupérer les données du fichier JSON "/logements.json" en fonction de l'ID extrait de l'URL
        fetch("/logements.json")
        .then(response => response.json())
        .then((data) => { //Cela reçoit les données JSON et cherche l'objet logement correspondant à l'ID extrait de l'URL
          let log = data.find(l => l.id === id) //Une fois l'objet trouvé, il est stocké dans la variable log
          console.log(log) 
          setLogement(log) //et mis à jour dans l'état logement à l'aide de setLogement(log)
        })
        .catch((error) => console.error(error))
    },[id]);

    if(logement === undefined) { //Si l'objet logement est indéfini (si aucun logement correspondant à l'ID n'est trouvé dans les données récupérées), 
      return (<><ErrorPage /></>) // le composant rend <ErrorPage />
    } else { // sinon, il continue à rendre le composant avec les données de logement récupérées

  return (
    <div>
      <Header/>

      <Footer/>
    </div>
  )
}
}
export default ApartmentPage
