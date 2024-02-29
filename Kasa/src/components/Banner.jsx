import '../styles/Banner.scss'

function Banner({img, title}) {
  return (
    <div className='banner'>
        <img src={img} alt="Image illustrant une falaise et une forêt" className='img-banner'/>
        {!title ? "" : (
          <h1 className="title">
            {title.includes("Chez vous,") ? (
              <span className="title-text"> {/* Utilisation de <span> à la place de <p> */}
                Chez vous,<br />
                {title.split("Chez vous,")[1]}
              </span>
            ) : title}
          </h1>
        )}
    </div>
  );
}
export default Banner;
