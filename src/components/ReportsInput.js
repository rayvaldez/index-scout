import React from 'react';
import { connect } from 'react-redux';
import { addReport } from '../actions/addReport';
import { Button } from 'reactstrap';

class ReportsInput extends React.Component {

  state = {
    name: '',
    content: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    this.props.addReport(this.state, this.props.player.id);
    this.setState({
      name: '',
      content: '',
    });
  };

  render() {
    return (
      <form className="report-form" onSubmit={this.handleSubmit}>
        <label>Name</label><br/>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>
        <label>Report</label><br/>
        <textarea name="content" value={this.state.content}
          onChange={this.handleChange} rows="8" cols="100"/><br/>
        <Button color="success" size="sm" type="submit">Submit</Button>
      </form>
    );
  }
}

export default connect(null, { addReport })(ReportsInput);
