import React from 'react';
import { connect } from 'react-redux';
import { deleteReport } from '../actions/deleteReport';
import { Button } from 'reactstrap';

const Reports = (props) => {

  const handleDelete = (report) => {
    props.deleteReport(report.id, props.player.id);
  };

  return (
    <div>
      {props.reports && props.reports.map(report =>
        <div key={report.id} className="report">
          <h5>{report.name} - Posted on - {report.created_at}
            <Button color="danger" size="sm" type="submit"
              onClick={() => handleDelete(report)}>Delete
            </Button>
          </h5>  <br/>
          <p id="report-content">{report.content}</p>
        </div>
      )}
    </div>
  );
};

export default connect(null, { deleteReport })(Reports);
