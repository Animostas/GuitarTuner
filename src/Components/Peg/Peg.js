import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Peg.css';

class Peg extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.alert('Yeah!');
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
        <Button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </Button>
    );
  }
}
export default Peg;
