import React from 'react';
import PlayerCard from './PlayerCard';
import { Row, CardGroup} from 'reactstrap';

const Players = (props) => {
  return (
    <CardGroup>
      <Row className="playercard-show">
        {props.players.map(player =>
          <div key={player.id}>
            <PlayerCard key={player.id} player={player}/>
          </div>
        )}
      </Row>
    </CardGroup>
  );
};

export default Players;
