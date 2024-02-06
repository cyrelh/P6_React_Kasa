import '../styles/CardApartments.scss'

//composant CardApartments qui prend deux props : cover et title
function CardApartments({cover, title}) {
  return (
    <div>
        <div className="card-superposition"></div>
            <img src={cover} alt={title} className="card-img"/>
        <div className="card-title">{title}</div>
        
    </div>
  )
}

export default CardApartments