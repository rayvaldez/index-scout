import React from 'react'
import Player from './Player'

const Players = (props) => {
  return (
    <div>
      {props.players.map(player =>
        <div key={player.id}>
          <Player player={player}/>
        </div>
      )}
    </div>
  )
}

export default Players
