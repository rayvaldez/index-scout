import React from 'react';
import {Route, Link} from 'react-router-dom';
import Player from './Player';
import PlayerCard from './PlayerCard';
import {Container, Row, CardGroup} from 'reactstrap';

const Players = (props) => {
  return (
    <CardGroup>
      <Row>
        {props.players.map(player =>
          <div key={player.id}>
            <PlayerCard key={player.id} player={player}/>
          </div>
        )}
      </Row>
    </CardGroup>
  )
}

export default Players
