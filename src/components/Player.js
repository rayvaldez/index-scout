import React from 'react';
import Stars from './Stars';
import BadgesContainer from '../containers/BadgesContainer';
import ReportsContainer from '../containers/ReportsContainer';
import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Player = (props) => {

  let player = props.players[props.match.params.id - 1];

  return (
    <Container fluid className="player-container">
      <Row className="player-show-container">
        <Col sm={{ size: 'auto' }}>
          <h4>
            {player ? player.name : null}
          </h4>
          <div>
            <img src={`/images/${player ? player.image : null}`}
              alt={`${player ? player.name : null}`} width="400" height="250"
            />
          </div>
        </Col>
        <Col sm={{ size: 'auto' }} className="player-show-badge">
          <p>
            Age - {player ? player.age  : null } <br/>
            Position - {player ? player.position  : null } <br/>
            Team - {player ? player.team  : null } <br/>
            Price - £{player ? player.price  : null }
          </p>
          <Stars badges={player ? player.badges : null}/>

        </Col>
        <Col className="badge-input">
          <BadgesContainer player={player ? player : null}/>
        </Col>
      </Row>
      <ReportsContainer player={player ? player : null} />
      <Route path={`/players/${player ? player.id : null}/reports`}
        render={() => (
          <ReportsContainer player={player ? player : null}/>
        )}
      />
    </Container>
  );
};

export default Player;
