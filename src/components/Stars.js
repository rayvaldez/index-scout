import React from 'react'

const Stars = (props) => {

  const star = "/images/star.png"

  return (
    <div className="badge-container">
      {props.badges && props.badges.map(badge =>
        <div key='badges'>
          {badge.media_buzz > 5 && <h6>Media Mogul <img src={star} alt="star" height="20" width="25"/></h6>}
          {badge.performance_buzz > 5 && <h6>High Scorer <img src={star} alt="star" height="20" width="25"/></h6>}
          {badge.capital_appreciation > 5 && <h6>High Cap App <img src={star} alt="star" height="20" width="25"/></h6>}
          {badge.prime_time > 5 && <h6>Prime Player <img src={star} alt="star" height="20" width="25"/></h6>}
          {badge.twilight_years > 5 && <h6>Last Legs <img src={star} alt="star" height="20" width="25"/></h6>}
        </div>
      )}
    </div>
  )
}

export default Stars
