import React from 'react';
import Stars from './Stars'
import Reports from './Reports'
import BadgesContainer from '../containers/BadgesContainer';
import ReportsContainer from '../containers/ReportsContainer';
import {Link, Route} from 'react-router-dom'
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
          <Stars badges={player ? player.badges : null}/>
          <Link to={`/players/${player ? player.id : null}/reports`}>View or Submit a Report</Link>
          <br/>
          <Link to={`/players/${player ? player.id : null}/badges`}>Vote for Badges!</Link>
        </Col>
      </Row>
      <Route path={`/players/${player ? player.id : null}/reports`}
        render={() => (
          <ReportsContainer player={player ? player : null}/>
        )}
      />
      <Route path={`/players/${player ? player.id : null}/badges`}
        render={() => (
          <BadgesContainer player={player ? player : null}/>
        )}
      />
    </Container>
  )
}

export default Player
