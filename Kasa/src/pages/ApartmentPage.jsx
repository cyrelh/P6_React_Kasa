import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slideshow from '../components/Slideshow.jsx'
import '../styles/ApartmentPage.scss'
import Collapse from '../components/Collapse.jsx'
import ErrorPage from './ErrorPage.jsx'
import Rating from "../components/Rating.jsx"



function ApartmentPage() {
  const [logement, setLogement] = useState({}) // on déclare un état local nommé logement avec une valeur initiale de {} (un objet vide)
  //logement va contenir les données récupérées à partir de la requête fetch
  
  const {id} = useParams(); // on utilise hook useParams pour extraire les paramètres d'URL ici 'id'
  //Par exemple, si l'URL est "/logement/123", id contiendra la valeur "123"

    useEffect(() => { // ce hook est déclenché chaque fois que la valeur de id change
      //Dans ce cas, il déclenche une requête fetch pour récupérer les données du fichier "/logements.json" en fonction de l'ID extrait de l'URL
        fetch("/logements.json")
        .then(response => response.json()) // Convertit la réponse en JSON
        .then((data) => {  // Une fois les données récupérées
          let log = data.find(l => l.id === id) // Trouve l'objet logement correspondant à l'ID extrait de l'URL
          console.log(log) 
          setLogement(log) //Met à jour l'état logement avec les données trouvées via setLogement(log)
        })
        .catch((error) => console.error(error)) // Gère les erreurs éventuelles de requête
    },[id]); // Déclenche l'effet uniquement lorsque l'ID change

    if(logement === undefined) { //Si aucun logement correspondant à l'ID n'est trouvé
      return (<><ErrorPage /></>); // Renvoie la page d'erreur 
    } else { // Sinon, affiche les données du logement

  return (
    <div className='wrapper'>
            <div className="conteneur">
              <div className="conteneur-scss"> 
                {logement && logement.pictures && (<Slideshow slides={logement.pictures}/> // si logement est défini et si contient une pictures, alors on affiche Slideshow avec images
                //(opé logique && qui retourne la dernière valeur évaluée ==> si logement est défini et s'il contient une propriété pictures
                //Si c'est le cas, l'expression retourne la valeur de logement.pictures )
                )} 
              </div>
            </div>
            <main>
              <div className="title-location-tags">
                <div className="title">
                  <h2>{logement && logement.title}</h2> {/* affiche un élément <h2> avec le titre du logement uniquement si l'objet logement est défini */}
                </div>
                <div className="location">
                  <p>{logement && logement.location}</p> {/* affiche <p> avec l'emplacement du logement uniquement si l'objet logement est défini */}
                </div>
                <div className="tags">
                  {logement && logement.tags && logement.tags.map(tag => {// afiche liste de tags pour le logement uniquement si l'objet logement est défini, s'il contient une propriété tags, 
                  //Et si logement.tags est un tableau. SI TOUTES conditions true  alors méthode map itère sur chaque élément du tableau logement.tags
                    return (
                      <div className="tag" key={tag}>{tag}</div> //Pour chaque tag, map retourne un élément <div> avec la classe tag qui a le tag en tant que contenu ET ayant une clé unique key définie comme tag
                    )
                  })}
                </div>
              </div>
              <div className="host-rating">
                <div className="host-name-picture">
                  <div className="host-name">
                    <p>{logement && logement.host && logement.host.name}</p> {/* affiche <p> avec le nom de l'hôte uniquement si objet logement est défini, et s'il contient une propriété host */}
                  </div>
                  <div className="host-picture">
                    <img src={logement && logement.host && logement.host.picture} alt="profile-picture" /> {/* affiche <img> avec l'image de profil de l'hôte uniquement si l'objet logement est défini, 
                    s'il contient une propriété host, et si logement.host est défini. */}
                  </div>
                </div>
                <div className="rating">
                  <Rating rate={logement && logement.rating} /> {/* affiche composant Rating avec la note attribuée au logement uniquement si l'objet logement est défini et s'il contient une propriété rating */}
                </div>
              </div>
            </main>
            <div className="description-equipements">
            <Collapse titre={'Description'} texte={logement.description}></Collapse>  {/* affiche le composant Collapse avec la description du logement */}
            <Collapse titre={'Équipements'} texte={logement.equipments}></Collapse> {/* idem mais avec les équipements du logement */}
            </div>

    </div>
  )
}
}
export default ApartmentPage


