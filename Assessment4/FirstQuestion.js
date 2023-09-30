//1. Create a class component and show all the life cycle hooks


import React, { Component } from 'react';

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    console.log('1. Constructor');
    this.state = { data: null };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('2. getDerivedStateFromProps');
    return null; // Return an updated state based on props
  }

  componentDidMount() {
    console.log('3. componentDidMount');
    // Perform any side effects or AJAX calls
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('4. shouldComponentUpdate');
    return true; // Return true to allow component to update, false to prevent update
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('5. getSnapshotBeforeUpdate');
    return null; // Return a value or null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('6. componentDidUpdate');
    // Perform actions after component updates
  }

  componentWillUnmount() {
    console.log('7. componentWillUnmount');
    // Perform any cleanup or teardown before component is removed from the DOM
  }

  render() {
    console.log('8. render');
    return (
      <div>
        <h1>Class Component Lifecycle </h1>
      </div>
    );
  }
}

export default LifecycleComponent;
