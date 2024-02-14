import React from 'react'

import ActiveStar from '../assets/star-active.png' 
import InactiveStar from '../assets/star-inactive.png'

function Rating({rate}) {
  const panel = [
    1,2,3,4,5
  ]
  return (
    <div>
      {panel.map((panelNumber) =>
            rate >= panelNumber ? (<img key={`rating-${panelNumber.toString()}`} 
            src={ActiveStar} alt="activestar" className="activestar"/>) : (<img key={`rating-${panelNumber.toString()}`} 
            src={InactiveStar} alt="inactivestar" className="inactivestar"/>)
            )}
    </div>
  )
}

export default Rating