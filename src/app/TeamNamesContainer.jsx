import React, { Component } from "react";
import TeamNamesView from "./TeamNamesView";

import { connect } from "react-redux";
import { fetchTeamNamesThunk } from "../thunks";

class TeamNamesContainer extends Component {
  constructor() {
    super();
    console.log("in constructor");
  }

  componentDidMount() {
    console.log("didMount");
    this.props.banana();
  }

  render() {
    console.log("render");
    return <TeamNamesView teamNames={this.props.teamNames} />
  }
}

function mapState(state) {
  console.log("mapState");
  return {
    teamNames: state.teamNames
  }
}

function mapDispatch(dispatch) {
  console.log("mapDispatch");
  return {
    banana: () => dispatch(fetchTeamNamesThunk())
  }
}

export default connect(mapState, mapDispatch)(TeamNamesContainer);