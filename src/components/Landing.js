import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Landing = () => {

  return (
    <div className="homepage">
      <Jumbotron fluid>
        <div className="landinglogo">
          <img src="images/indexscout.gif" alt="Index Scout"/>
        </div>
        <br/>
        <p className="lead">The #1 source for the latest news & advice for new investors</p>
        <hr className="my-2" />
        <p><Link to="/players">
          <Button color="primary"> Continue </Button></Link>
        </p>
      </Jumbotron>
    </div>
  );

};

export default Landing;
