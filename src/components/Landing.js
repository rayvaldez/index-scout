import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Landing = () => {

  return (
    <div className="homepage">
      <Jumbotron fluid>
        <h1 className="display-3">Welcome to Index Scout</h1>
        <br/>
        <p className="lead">Home of the latest and best advice for new investors</p>
        <hr className="my-2" />
        <p>Find your next player <Link to="/players">
          <Button color="primary">  here</Button></Link>
        </p>
      </Jumbotron>
    </div>
  );

};

export default Landing;
