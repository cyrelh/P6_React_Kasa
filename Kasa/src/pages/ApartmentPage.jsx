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
  
  const {id} = useParams(); // hook useParams permet d'extraire les paramètres d'URL
  //ici id est extrait des paramètres d'URL. Par exemple, si l'URL est "/logement/123", id contiendra la valeur "123"
    useEffect(() => { // ce hook est déclenché chaque fois que la valeur de id change
      //Dans ce cas, il déclenche une requête fetch pour récupérer les données du fichier "/logements.json" en fonction de l'ID extrait de l'URL
        fetch("/logements.json")
        .then(response => response.json()) // Convertit la réponse en JSON
        .then((data) => {  // Une fois les données récupérées
          let log = data.find(l => l.id === id) // Trouve l'objet logement correspondant à l'ID extrait de l'URL
          console.log(log) 
          setLogement(log) //Met à jour l'état logement avec les données trouvées à l'aide de setLogement(log)
        })
        .catch((error) => console.error(error)) // Gère les erreurs de requête
    },[id]); // Déclenche l'effet uniquement lorsque l'ID change

    if(logement === undefined) { //Si aucun logement correspondant à l'ID n'est trouvé
      return (<><ErrorPage /></>); // Renvoie la page d'erreur 
    } else { // Sinon, affiche les données du logement

  return (
    <div>
            <div className="conteneur">
              <div className="conteneur-scss"> 
                {logement && logement.pictures && (<Slideshow slides={logement.pictures}/> // si logement est défini et si contient une propriété pictures, le composant Slideshow sera rendu avec les images spécifiées dans logement.pictures
                //(opé logique && qui retourne la dernière valeur évaluée ==> si logement est défini et s'il contient une propriété pictures
                //Si c'est le cas, l'expression retourne la valeur de logement.pictures ) -->donc si true cela rend le composant Slideshow avec les propriétés slides définies sur logement.pictures
                )} 
              </div>
            </div>
            <main>
              <div className="title-location-tags">
                <div className="title">
                  <h2>{logement && logement.title}</h2> {/* affiche un élément <h2> avec le titre du logement uniquement si l'objet logement est défini ET s'il contient une propriété title */}
                </div>
                <div className="location">
                  <p>{logement && logement.location}</p> {/* affiche <p> avec l'emplacement du logement uniquement si l'objet logement est défini ET s'il contient une propriété location */}
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
                    <p>{logement && logement.host && logement.host.name}</p> {/* affiche <p> avec le nom de l'hôte uniquement si objet logement est défini, s'il contient une propriété host, 
                    ET si logement.host est défini */}
                  </div>
                  <div className="host-picture">
                    <img src={logement && logement.host && logement.host.picture} alt="profile-picture" /> {/* affiche <img> avec l'image de profil de l'hôte uniquement si l'objet logement est défini, 
                    s'il contient une propriété host, et si logement.host est défini. */}
                  </div>
                </div>
                <div className="rating">
                  <Rating rate={logement && logement.rating} /> {/* affiche composant Rating avec la note attribuée au logement uniquement si l'objet logement est défini et s'il contient une propriété rating. */}
                </div>
              </div>
            </main>
            <div className="description-equipements">
              <Collapse name="Description" para={logement && logement.description}/> {/* Cela vérifie si l'objet logement est défini. 
              Si c'est le cas, il vérifie si logement a une propriété description. Si c'est TRUE, l'expression renvoie la valeur de logement.description, sinon elle renvoie FALSE ou undefined */}
              {/* Si l'expression précédente est évaluée à TRUE, alors affiche composant Collapse avec le nom "Description" et la description du logement. Sinon, rien n'est rendu */}
              <Collapse name="Equipements" para={logement && logement.equipments && logement.equipments.map(eq => <li>{eq}</li>) }/>
              {/* GROS BUG <Collapse name="Equipement" para={logement.equipments.map(eq => <li>{eq}</li>)} /> */}

            </div>

    </div>
  )
}
}
export default ApartmentPage
