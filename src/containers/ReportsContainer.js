import React from 'react'
import Reports from '../components/Reports'
import ReportsInput from '../components/ReportsInput'

class ReportsContainer extends React.Component {

  render() {
    return (
      <div>
        <Reports reports={this.props.player && this.props.player.reports} player={this.props.player}/>
        <ReportsInput player={this.props.player}/>
      </div>
    )
  }
}

export default ReportsContainer
