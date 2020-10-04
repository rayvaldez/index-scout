import React from 'react'

const Players = (props) => {
  return (
    <div>
      {props.players.map(player =>
        <li key={player.id}>
          {player.name}
        </li>
      )}
    </div>
  )
}

export default Players
