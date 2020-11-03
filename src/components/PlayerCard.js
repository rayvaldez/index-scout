import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';

const PlayerCard = (props) => {
  return (
    <Col sm="6">
      <Card>
        <CardImg src={`/images/${props.player.image}`}/>
        <CardBody>
          <CardTitle><Link to={`/players/${props.player.id}`}>{props.player.name}</Link></CardTitle>
          <CardText>
            Age: {props.player.age} <br/>
            Position: {props.player.position} <br/>
            Price: {props.player.price}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PlayerCard;
