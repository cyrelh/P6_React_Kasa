import { useState } from 'react' // Import de useState depuis React pour gérer l'état du composant
import iconCollapse from "../assets/collapse.png"
import "../styles/Collapse.scss"

// Définition du composant Collapse comme une fonction prenant les props 'titre' et 'texte'
function Collapse({ titre, texte }) {
  const [isOpened, setIsOpened] = useState(false);  // Utilisation de useState pour gérer l'état du composant : ouvert ou fermé
  const arrowClick = () => {   // Fonction pour gérer le clic sur la flèche d'ouverture/fermeture du Collapse
    setIsOpened((prevRotation) => !prevRotation);     // Inversion de la valeur de 'isOpened' à chaque clic
  };

  return (
    <div className="collapse-all">

      {/* Section du titre et de la flèche d'ouverture/fermeture */}
      <div className="collapse-title">
        <p>{titre}</p> {/* Titre du Collapse */}
        <img src={iconCollapse} alt='flèche' className={isOpened ? 'rotated' : ''} onClick={arrowClick}></img>        
         {/* Icone de la flèche d'ouverture/fermeture, la classe 'rotated' est ajoutée si le Collapse est ouvert */}
      </div>

      {/* Section du texte du Collapse */}
      <div className={isOpened ? 'collapse-text collapse-expanded' : 'collapse-text'}>     {/* si isOpened est vrai, la classe sera 'collapse-text collapse-expanded', sinon elle sera 'collapse-text' */}
        <div id='text-container' className={isOpened ? 'expanded' : ''}>     {/* si isOpened est vrai, la classe sera 'expanded', sinon elle sera une chaîne vide.  */}
          {/* expression conditionnelle */}
          {Array.isArray(texte) ? (
            texte.map((item, index) => (<p key={index}>{item}</p>))) : (<p>{texte}</p>)}{/* ça vérifie si la prop texte est un tableau
            Si c'est le cas, chaque élément du tableau est affiché dans un paragraphe séparé à l'aide de la méthode map
            Sinon, le contenu texte est affiché tel quel dans un seul paragraphe */}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
