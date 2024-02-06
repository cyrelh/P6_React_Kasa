import '../styles/Banner.scss'

function Banner({img, title}) {
  return (
    <div className='banner'>
        <img src={img} alt="Image illustrant une falaise et une forêt" className='img-banner'/>
        {/*Affiche une image avec la source spécifiée par la prop img */}
        {!title ? "": <h1 className="title">{title}</h1> }
        {/*condition ternaire pour vérifier si la prop title est définie. 
        Si prop title est défini, un élément h1 est rendu avec la classe CSS 'title' affichant le titre. Sinon, rien n'est rendu à cet endroit*/}
    </div>
  )
}

export default Banner