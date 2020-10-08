import React from 'react';
import BadgesContainer from '../containers/BadgesContainer';
import ReportsContainer from '../containers/ReportsContainer';
import { Container } from 'reactstrap';

const Player = (props) => {

  let player = props.players[props.match.params.id -1]
  console.log(player)
  return (
    <Container fluid>
      <h2>
        {player ? player.name : null}
      </h2>
      <div>
        <img src={`/images/${player ? player.image : null }`} alt={`${player ? player.name : null}`} width="400" height="250"/>
      </div>
      <p>
        Age - {player ? player.age  :null} <br/>
        Position - {player ? player.position  :null} <br/>
        Team - {player ? player.team  :null} <br/>
        Price - £{player ? player.price  :null}
      </p>
      <BadgesContainer player={player}/>
      <ReportsContainer player={player}/>
    </Container>
  )
}

export default Player
