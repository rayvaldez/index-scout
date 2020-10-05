import React from 'react'

const Player = (props) => {

  let player = props.players[props.match.params.id -1]

  return (
    <li>
      <h2>
        {player ? player.name : null}
      </h2>
      <p>
        {player ? player.age  :null} <br/>
        {player ? player.position  :null} <br/>
        {player ? player.team  :null} <br/>
        £{player ? player.price  :null}
      </p>
    </li>
  )
}

export default Player
