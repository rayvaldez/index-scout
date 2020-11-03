import React from 'react';
import { connect } from 'react-redux';
import { updateBadges } from '../actions/updateBadges';
import { Button } from 'reactstrap';

class BadgesInput extends React.Component {

  state ={};

  increment = (event) => {
    event.preventDefault();
    const key = event.target.name;
    const value = parseInt(event.target.value);

    this.setState({
      [key]: value + 1,
    });

    this.props.setStateBadge(key, value + 1);
  };

  handleSubmit = () => {
    this.props.updateBadges(this.state, this.props.badges[0].id);
  };

  render() {

    return (
      <div>
        <Button color="primary" size="sm" type="submit" name='media_buzz'
          value={this.props.badges && this.props.badges[0].media_buzz}
          onClick={this.increment}>Media Mogul
        </Button>{' '}
        <Button color="primary" size="sm" type="submit" name='performance_buzz'
          value={this.props.badges && this.props.badges[0].performance_buzz}
          onClick={this.increment}>High Scorer
        </Button>{' '}
        <Button color="primary" size="sm" type="submit" name='capital_appreciation'
          value={this.props.badges && this.props.badges[0].capital_appreciation}
          onClick={this.increment}>High Cap App
        </Button>{' '}
        <Button color="primary" size="sm" type="submit" name='prime_time'
          value={this.props.badges && this.props.badges[0].prime_time}
          onClick={this.increment}>Prime Player
        </Button>{' '}
        <Button color="primary" size="sm" type="submit" name='twilight_years'
          value={this.props.badges && this.props.badges[0].twilight_years}
          onClick={this.increment}>Last Legs
        </Button>
        <br/>
        <br/>
        <Button color="success" size="sm" type="submit" onClick={this.handleSubmit}>Submit</Button>
      </div>
    );
  }
}

export default connect(null, { updateBadges })(BadgesInput);
