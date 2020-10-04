import React from 'react'
import {connect} from 'react-redux'
import {fetchPlayers} from '../actions/fetchPlayers'
import Players from '../components/Players'

class PlayersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPlayers()
  }

  render() {
    return(
      <div>
        <Players players={this.props.players}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps, {fetchPlayers})(PlayersContainer)
