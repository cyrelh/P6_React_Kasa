import '../styles/Banner.scss'

function Banner({img, title}) {
  return (
    <div className='banner'>
        <img src={img} alt="Image illustrant une falaise et une forêt" className='img-banner'/>
              {/* La condition vérifie d'abord si la prop title est vide (!title)
              Si title est vide, cela signifie qu'aucun titre n'a été fourni pour le composant Banner, auquel cas on n'affiche rien (""). */}
        {!title ? "" : ( 
          <h1 className="title">   {/* Si un titre est fourni, affiche le titre */}
                      {/*autre condition à l'intérieur de la balise h1 pour vérifier si le titre contient la phrase "Chez vous," en utilisant la méthode includes() */}
            {title.includes("Chez vous,") ? (
              <span className="title-text">       {/* Si le titre contient "Chez vous," une partie spécifique du titre est affichée avec le texte "Chez vous,"  */}
                Chez vous,<br /> {/* suivi d'un saut de ligne */}
                {title.split("Chez vous,")[1]} {/* puis le reste du titre après la phrase "Chez vous,"*/}
              </span>
            ) : title} {/* Si le titre ne contient pas "Chez vous," affiche le titre tel quel */}
          </h1>
        )}
    </div>
  );
}
export default Banner;
