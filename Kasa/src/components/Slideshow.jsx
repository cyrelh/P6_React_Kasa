import React, { useState, useEffect } from "react";
import ArrowBack from '../assets/arrow_back.png';
import ArrowForward from '../assets/arrow_forward.png';


// Définition du composant Slideshow
function Slideshow({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0); // Déclaration d'un état local 'currentIndex' pour suivre l'index de la diapositive actuelle

// Fonction pour passer à la diapositive précédente
  const ToPrevious = () => {
    const isFirstSlide = currentIndex === 0; // Vérifie si la diapositive actuelle est la première
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1; // Si c'est la première diapositive, on revient à la dernière, sinon on décrémente l'index
    setCurrentIndex(newIndex); // Met à jour l'index de la diapositive actuelle
  }

// Fonction pour passer à la diapositive suivante
  const ToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;  // Vérifie si la diapositive actuelle est la dernière
    const newIndex = isLastSlide ? 0 : currentIndex + 1; // Si c'est la dernière diapositive, on revient à la première, sinon on incrémente l'index
    setCurrentIndex(newIndex);
  }
// hook pour effet de côté pour changer automatiquement de diapositive à intervalle régulier
  useEffect(() => {
    const interval = setInterval(() => {
      ToNext(); // Appel de la fonction pour passer à la diapositive suivante
    }, 3000); // Réglage de l'intervalle de changement d'image en millisecondes (ici toutes les 3 secondes)

    return () => clearInterval(interval); // Nettoyage de l'intervalle lors du démontage du composant
  }, [currentIndex, slides.length]); // Déclenchement de l'effet lorsque currentIndex ou la longueur des diapositives change

  // Rendu conditionnel du composant Slideshow en fonction du nombre d'images dans le diaporama
  if(slides.length === 1) { //condition qui vérifie si la longueur du tableau slides est égale à 1
    return ( //Si c'est le cas, alors le diapo est simplement une image fixe sans fonctionnalité de navigation car il n'y a qu'une seule diapo !!!
      <div className="slider-scss">
        <div className="slide-scss" style={{backgroundImage: `url(${slides[currentIndex]})`}}></div> 
      </div>
    )
  } else { //Sinon, si la longueur du tableau slides est supérieure à 1 
    return (
      <div className="slider-scss">
        <div className="counter">{currentIndex + 1}/{slides.length}</div> {/* Affichage du numéro de diapoactuelle */}
        <img src={ArrowBack} alt="left" className="left" onClick={ToPrevious}/> {/* Bouton pour passer à la diapo précédente */}
        <img src={ArrowForward} alt="right" className="right" onClick={ToNext}/> {/* Bouton pour passer à la diapo suivante */}
        <div className="slide-scss" style={{backgroundImage: `url(${slides[currentIndex]})`}}></div> {/* Affichage de l'image actuelle */}
      </div>
    )
  }
}

export default Slideshow;
