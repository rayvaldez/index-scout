import React from 'react'
import Badges from '../components/Badges'

class BadgesContainer extends React.Component {

  render() {
    return (
      <div>
        <Badges badges={this.props.player && this.props.player.badges}/>
      </div>
    )
  }
}

export default BadgesContainer
