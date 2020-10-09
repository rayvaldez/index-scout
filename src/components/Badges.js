import React from 'react'

const Badges = (props) => {

  return (
    <div className="badge-container">
      {props.badges && props.badges.map(badge =>
        <div key='badges'>
          Media Mogul - {badge.media_buzz} - High Scorer - {badge.performance_buzz} - High Cap App - {badge.capital_appreciation} - Prime Player - {badge.prime_time} - Last Legs - {badge.twilight_years}
        </div>
      )}
    </div>
  )
}

export default Badges
