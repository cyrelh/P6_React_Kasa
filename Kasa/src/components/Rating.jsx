import React from 'react'

import ActiveStar from '../assets/star-active.png' 
import InactiveStar from '../assets/star-inactive.png'

function Rating({rate}) { //prop rate utilisée pour savoir quelle image d'étoile (active ou inactive) doit être affichée en fonction de la note attribuée
  const panel = [
    1,2,3,4,5
  ]
  return (
    <div> 
      {panel.map((panelNumber) =>  // on utilise méthode map() sur le tableau panel
      //prop rate utilisée à l'intérieur de la fonction de mapping de panel.map() pour comparer chaque élément du tableau panel à la valeur de rate
      //panelNumber représente chaque élément du tableau, c'est-à-dire les chiffres 1, 2, 3, 4 et 5
            rate >= panelNumber ? (<img key={`rating-${panelNumber.toString()}`}  //si rate >= valeur panelNumber alors note est >= à cette étoile spécifique
            // Alors on affiche l'image de l'étoile active (ActiveStar)
            src={ActiveStar} alt="activestar" className="activestar"/>) : (<img key={`rating-${panelNumber.toString()}`} 
            src={InactiveStar} alt="inactivestar" className="inactivestar"/>)
            //Sinon, rate est < valeur panelNumber, alors note est < à cette étoile spécifique
            //Alors, on affiche l'image de l'étoile inactive (InactiveStar)
            )}
    </div>
  )
}

export default Rating