import React from 'react'
import BadgesContainer from '../containers/BadgesContainer'

const Player = (props) => {

  let player = props.players[props.match.params.id -1]

  return (
    <div>
      <h2>
        {player ? player.name : null}
      </h2>
      <p>
        {player ? player.age  :null} <br/>
        {player ? player.position  :null} <br/>
        {player ? player.team  :null} <br/>
        £{player ? player.price  :null}
      </p>
      <BadgesContainer player={player}/>
    </div>
  )
}

export default Player
