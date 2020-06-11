import axios from "axios";

// ACTION TYPES;
const FETCH_TEAM_NAMES = "FETCH_TEAM_NAMES";

// ACTION CREATORS;

function fetchTeamNames(teamNames) {
  console.log("in action creator");
  return {
    type: FETCH_TEAM_NAMES,
    payload: teamNames
  }
}

// THUNKS (THESE ARE JUST ASYNCHRONOUS ACTION CREATORS);

export function fetchTeamNamesThunk() {
  console.log("in thunk");
  return function(dispatch) {
    console.log("in inner thunk function");
    axios
      .get("https://nba-players.herokuapp.com/teams")
      .then(res => res.data)
      .then(teamNames => {
        console.log("got back team names");
        dispatch(fetchTeamNames(teamNames))
      })
      .catch(err => console.log(err))
  }
}

// REDUCER FUNCTION;

function teamNamesReducer(state = [], action) {
  console.log("in reducer");
  switch(action.type) {
    case FETCH_TEAM_NAMES:
      return action.payload;
    default:
      return state;
  }
}

export default teamNamesReducer;