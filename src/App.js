import React from 'react';
import './App.css';
import PlayersContainer from './containers/playersContainer';
import {Route} from 'react-router-dom'
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/home" component={Landing} />
        <PlayersContainer />
        <Route exact path="/about" component={About}/>
      </div>
    );
  }
}

export default App;
