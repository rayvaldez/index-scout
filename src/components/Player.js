import React from 'react';
import BadgesContainer from '../containers/BadgesContainer';
import ReportsContainer from '../containers/ReportsContainer';
import { Container, Row, Col } from 'reactstrap';

const Player = (props) => {

  let player = props.players[props.match.params.id -1]

  return (
    <Container fluid>
      <Row>
        <Col sm={{ size: 'auto' }}>
          <h2>
            {player ? player.name : null}
          </h2>
          <div>
            <img src={`/images/${player ? player.image : null }`} alt={`${player ? player.name : null}`} width="400" height="250"/>
          </div>
        </Col>
        <Col sm={{ size: 'auto'}} className="player-show-badge">
          <p>
            Age - {player ? player.age  :null} <br/>
            Position - {player ? player.position  :null} <br/>
            Team - {player ? player.team  :null} <br/>
            Price - £{player ? player.price  :null}
          </p>
          <BadgesContainer player={player}/>
        </Col>
      </Row>
      <ReportsContainer player={player}/>
    </Container>
  )
}

export default Player
