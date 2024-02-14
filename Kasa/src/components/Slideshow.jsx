// On importe les dépendances nécessaires
import { useState } from "react"
import ArrowBack from '../assets/arrow_back.png'
import ArrowForward from '../assets/arrow_forward.png'

function Slideshow({slides}) { //Déclaration du composant fonctionnel ATTENTION OUBLI de l'accolade
  const [currentIndex, setCurrentIndex] = useState(0); // [currentIndex, setCurrentIndex] :"destructuring" --> déclare respectivement la valeur actuelle de l'état et une fonction pour mettre à jour cette valeur
  // hook useState(0) : Cela initialise la variable d'état currentIndex avec une valeur initiale de 0. Cela signifie que lorsque le composant est monté pour la première fois, currentIndex aura la valeur 0.


  const ToPrevious = () => { // Fonction pour passer à la diapositive précédente
      const isFirstSlide = currentIndex === 0 // variable booléenne qui Vérifie si la diapositive actuelle est la première
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1 
      //Si isFirstSlide TRUE, diapositive actuelle est la première diapositive. Donc, newIndex est défini comme l'index de la dernière diapositive. 
      //slides.length donne le nombre total de diapositives, en faisant - 1, on obtient l'index de la dernière diapositive car les indices commencent à 0

      // Si isFirstSlide FALSE, diapositive actuelle n'est pas la première diapositive. Donc, newIndex est défini comme l'index de la diapositive précédente par rapport à la diapositive actuelle. 
      // Pour cela, on décrémente simplement currentIndex de 1 pour obtenir l'index de la diapositive précédente.
      setCurrentIndex(newIndex) // Met à jour l'index de la diapositive actuelle
  }

  const ToNext = () => { // Fonction pour passer à la diapositive suivante
      const isLastSlide = currentIndex === slides.length - 1 // vérifie si la diapositive actuelle est la dernière dans le tableau slides
      //currentIndex c'est l'index de la diapo actuellement affichée dans le diapo
      //slides.length - 1 donne l'index de la dernière diapositive dans le tableau slides, car les indices commencent à zéro. Donc, slides.length - 1 est l'index de la dernière diapositive dans le tableau.
      // Si currentIndex est = à l'index de la dernière diapositive, alors isLastSlide sera True, sinon, ce sera False.

      const newIndex = isLastSlide ? 0 : currentIndex + 1 //définit newIndex cô l'index de la diapositive suivante à afficher dans le diaporama
      //Si isLastSlide TRUE, alors diapo actuelle est la dernière dans le diaporama. Alors, on revient à la première diapo, donc newIndex est défini à 0.
      //Si isLastSlide FALSE, alors diapo actuelle n'est pas la dernière dans le diaporama. Alors, on passe à la diapo suivante, donc newIndex est défini en incrémentant currentIndex de 1 pour avoir index de la diapo suivante
      setCurrentIndex(newIndex)
  }

  if(slides.length === 1) { // Si le tableau de diapositives ne contient qu'une seule diapositive
      return (
          <div className="slider-scss">
              <div className="slide-scss" style={{backgroundImage: `url(${slides[currentIndex]})`}}></div> {/* propriété de style en ligne qui définit l'image de background en utilisant la diapositive actuelle */}
               {/* récupère l'URL de l'image de la diapositive actuelle à partir du tableau slides, en utilisant l'index currentIndex. */}
          </div>
      )
  } else {  // Si le tableau de diapositives contient plusieurs diapositives
  return (
      <div className="slider-scss">
          <div className="counter">{currentIndex + 1}/{slides.length}</div> {/* Affiche le numéro de la diapositive actuelle */}
          <img src={ArrowBack} alt="left" className="left" onClick={ToPrevious}/> {/* Bouton pour passer à la diapositive précédente */}
          <img src={ArrowForward} alt="right" className="right" onClick={ToNext}/> {/* Bouton pour passer à la diapositive suivante */}
          <div className="slide-scss" style={{backgroundImage: `url(${slides[currentIndex]})`}}></div> {/* Affiche la diapositive actuelle */}
      </div>
  )}
}

export default Slideshow