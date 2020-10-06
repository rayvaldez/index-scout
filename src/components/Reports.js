import React from 'react'

const Reports = (props) => {

  return (
    <div>
      {props.reports && props.reports.map(report =>
        <div key={report.id}>
          <h4>{report.name} - Posted on - {report.created_at}</h4> <br/>
          {report.content}
        </div>
      )}
    </div>
  )
}

export default Reports
