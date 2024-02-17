import React from 'react'

import ActiveStar from '../assets/star-active.png' 
import InactiveStar from '../assets/star-inactive.png'

function Rating({rate}) { //prop rate utilisée pour savoir quelle image d'étoile (active ou inactive) doit être affichée en fonction de la note attribuée
  const panel = [1, 2, 3, 4, 5]; // Tableau qui représente les cinq étoiles de notation possible
  const keyPrefix = 'rating-'; // Préfixe utilisé pour créer la clé unique de chaque élément img

// Fonction pour créer les stars
  const renderStar = (isActive, panelNumber) => ( // Fonction avec 2 arguments : isActive (booléen si étoile est active) et panelNumber (numéro de l'étoile)
    <img
      key={`${keyPrefix}${panelNumber}`} // Clé unique de l'élément img, combinant le préfixe et le numéro de panneau
      src={isActive ? ActiveStar : InactiveStar} //  Si isActive vrai (ctd l'étoile est active), l'expression retourne ActiveStar, ctd image affichée sera étoile active
      //Sinon, si isActive est faux, expression retourne InactiveStar, ctd img affichée sera etoile inactive
      alt={isActive ? "activestar" : "inactivestar"} // Texte alternatif basé sur si l'étoile est active ou inactive
      className={isActive ? "activestar" : "inactivestar"}
    />
  );
  return (
    //panel.map(panelNumber => ...) : on itère sur chaque élément panelNumber du tableau panel
    //Pour chaque panelNumber, renderStar fonction de rendu appelée
    <div> 
            {panel.map(panelNumber => renderStar(rate >= panelNumber, panelNumber))} {/* Boucle de rendu des étoiles en utilisant la fonction renderStar */}
    </div>
    // argument rate >= panelNumber détermine si l'étoile doit être active ou inactive en comparant la note rate passée en prop avec la valeur de panelNumber
    //Si la note est supérieure ou égale à panelNumber, alors isActive est vrai, sinon c'est faux.
  // argument panelNumber est simplement le numéro de panneau correspondant à l'étoile en cours d'itération
  )
}

export default Rating