import '../styles/Banner.scss'

function Banner({img, title}) {
  return (
    <div className='banner'>
        <img src={img} alt="Image illustrant une falaise et une forêt" className='img-banner'/>
        
    </div>
  )
}

export default Banner