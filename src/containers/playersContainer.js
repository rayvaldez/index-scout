import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPlayers } from '../actions/fetchPlayers';
import Players from '../components/Players';
import Player from '../components/Player';

class PlayersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/players/:id' render={(routerProps) =>
            <Player {...routerProps} players={this.props.players}/>}/>
          <Route path='/players' render={(routerProps) =>
            <Players {...routerProps} players={this.props.players}/>}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

export default connect(mapStateToProps, { fetchPlayers })(PlayersContainer);
