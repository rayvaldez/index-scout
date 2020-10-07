import React from 'react'
import {connect} from 'react-redux'
import {deleteReport} from '../actions/deleteReport'

const Reports = (props) => {

  const handleDelete = (report) => {
    props.deleteReport(report.id, props.player.id)
  }

  return (
    <div>
      {props.reports && props.reports.map(report =>
        <div key={report.id}>
          <h4>{report.name} - Posted on - {report.created_at} <button onClick={() => handleDelete(report)}>Delete</button></h4>  <br/>
          {report.content}
        </div>
      )}
    </div>
  )
}

export default connect(null, {deleteReport})(Reports)
