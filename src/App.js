import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import PlayersContainer from './containers/playersContainer'
import logo from './images/logo.png';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <img src={logo} alt="Index Scout" width="100" height="90"/>
        <Link to="/players">Home</Link>
        <PlayersContainer/>
      </div>
    );
  }
}

export default App;
