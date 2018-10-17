import axios from 'axios';

// ACTION TYPES;
const FETCH_PLAYER = "FETCH_PLAYER";
const REMOVE_PLAYER = "REMOVE_PLAYER";

// ACTION CREATORS;
const fetchPlayer = (player) => {
  return {
    type: FETCH_PLAYER,
    payload: player
  }
}

const removePlayer = () => {
  return {
    type: REMOVE_PLAYER
  }
}

// THUNK CREATORS;
export const fetchPlayerThunk = (lastName, firstName) => (dispatch) => {
  return axios
    .get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
    .then(res => res.data)
    .then(nbaPlayer => dispatch(fetchPlayer(nbaPlayer)))
    .catch(err => console.log(err));
}

export const removePlayerThunk = () => (dispatch) => {
  return dispatch(removePlayer());
}

// REDUCER;
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PLAYER:
      return action.payload;
    case REMOVE_PLAYER:
      return {};
    default:
      return state;
  }
}
