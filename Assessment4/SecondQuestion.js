//2. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.

import React, { Component } from 'react';

class Component2 extends Component {
  state = {
    data: 'initial data'
  };

  handleClick = () => {
    const duplicateData = this.state.data; // Duplicate the state
    this.setState({ data: duplicateData }); // Update the state with the duplicate 
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.data !== this.state.data;
  }

  render() {
    console.log('Render called.');
    return (
      <div>
        <p>Data: {this.state.data}</p>
        <button onClick={this.handleClick}>Update State (duplicate)</button>
      </div>
    );
  }
}

export default Component2;
