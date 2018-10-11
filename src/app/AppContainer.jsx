import React, { Component } from 'react';
import { setPlayerThunk } from '../thunks';
import { connect } from 'react-redux';
import AppView from './AppView';

// Smart container;
class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setPlayer(this.state.lastName, this.state.firstName);
  }

  render() {
    return (
      <AppView
        currentPlayer={this.props.currentPlayer}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

// Map state to props;
function mapState(state) {
  return {
    currentPlayer: state.currentPlayer
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    setPlayer: (lastName, firstName) => dispatch(setPlayerThunk(lastName, firstName))
  }
}

// Export our store-connected component;
export default connect(mapState, mapDispatch)(AppContainer);
