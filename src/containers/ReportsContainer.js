import React from 'react'
import Reports from '../components/Reports'

class ReportsContainer extends React.Component {

  render() {
    return (
      <div>
        <Reports reports={this.props.player && this.props.player.reports}/>
      </div>
    )
  }
}

export default ReportsContainer
