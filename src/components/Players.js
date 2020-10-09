import React from 'react';
import {Route, Link} from 'react-router-dom';
import PlayerCard from './PlayerCard';
import {Row, CardGroup} from 'reactstrap';

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
