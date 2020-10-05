import React from 'react'
import {Route, Link} from 'react-router-dom'
import Player from './Player'

const Players = (props) => {
  return (
    <div>
      {props.players.map(player =>
        <div key={player.id}>
          <Link to={`/players/${player.id}`}>{player.name}</Link>
        </div>
      )}
    </div>
  )
}

export default Players
