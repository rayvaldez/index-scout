import React from 'react'
import Badges from '../components/Badges'
import BadgesInput from '../components/BadgesInput'
import {connect} from 'react-redux'
import {updateBadges} from '../actions/updateBadges'

class BadgesContainer extends React.Component {

  state = {}

  setStateBadge = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleUpdate = () => {
    this.props.updateBadges(this.state, this.props.player.id)
  }

  render() {
    return (
      <div>
        <Badges badges={this.props.player && this.props.player.badges}/>
        <BadgesInput badges={this.props.player && this.props.player.badges} setStateBadge={this.setStateBadge} handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
}

export default connect(null, {updateBadges})(BadgesContainer)
