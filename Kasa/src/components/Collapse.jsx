import { useState } from 'react' // Import de useState depuis React pour gérer l'état du composant
import iconCollapse from "../assets/collapse.png" // Import de l'icône collapse depuis les ressources
import "../styles/Collapse.scss"

function Collapse({ titre, texte }) {
  const [isOpened, setIsOpened] = useState(false);

  const arrowClick = () => {
    setIsOpened((prevRotation) => !prevRotation);
  };

  return (
    <div className="collapse-all">
      <div className="collapse-title">
        <p>{titre}</p>
        <img src={iconCollapse} alt='flèche' className={isOpened ? 'rotated' : ''} onClick={arrowClick}></img>
      </div>
      <div className={isOpened ? 'collapse-text collapse-expanded' : 'collapse-text'}>
        <div id='text-container' className={isOpened ? 'expanded' : ''}>
          {Array.isArray(texte) ? (
            texte.map((item, index) => (
              <p key={index}>
                {item}
              </p>
            ))
          ) : (
            <p>{texte}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
