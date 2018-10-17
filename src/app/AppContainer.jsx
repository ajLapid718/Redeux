import React, { Component } from 'react';
import { fetchPlayerThunk, removePlayerThunk } from '../thunks';
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
    this.blankState = this.state;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchPlayer(this.state.lastName, this.state.firstName);
  }

  handleReset = (event) => {
    event.preventDefault();
    this.props.removePlayer();
    this.setState(this.blankState);
  }

  render() {
    return (
      <AppView
        currentPlayer={this.props.currentPlayer}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleReset={this.handleReset}
        playerInfo={this.state}
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
    fetchPlayer: (lastName, firstName) => dispatch(fetchPlayerThunk(lastName, firstName)),
    removePlayer: () => dispatch(removePlayerThunk())
  }
}

// Export our store-connected component;
export default connect(mapState, mapDispatch)(AppContainer);
