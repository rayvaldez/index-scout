import React from 'react';
import './App.css';
import PlayersContainer from './containers/playersContainer';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <PlayersContainer />
      </div>
    );
  }
}

export default App;
