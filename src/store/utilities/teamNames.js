import axios from "axios";

// ACTION TYPES;
const FETCH_TEAM_NAMES = "FETCH_TEAM_NAMES";

// ACTION CREATORS;

function fetchTeamNames(teamNames) {
  return {
    type: FETCH_TEAM_NAMES,
    payload: teamNames
  }
}

// THUNKS (THESE ARE JUST ASYNCHRONOUS ACTION CREATORS);

export function fetchTeamNamesThunk() {
  return function(dispatch) {
    axios
      .get("https://nba-players.herokuapp.com/teams")
      .then(res => res.data)
      .then(teamNames => dispatch(fetchTeamNames(teamNames)))
      .catch(err => console.log(err))
  }
}

// REDUCER FUNCTION;

function teamNamesReducer(state = [], action) {
  switch(action.type) {
    case FETCH_TEAM_NAMES:
      return action.payload;
    default:
      return state;
  }
}

export default teamNamesReducer;