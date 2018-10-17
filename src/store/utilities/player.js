import axios from 'axios';

// ASYNCHRONOUS CALL;
const getPlayer = (lastName, firstName) => {
  return axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`);
}

// ACTION TYPES;
const FETCH_PLAYER = "FETCH_PLAYER";
const REMOVE_PLAYER = "REMOVE_PLAYER";

const FETCH_PLAYER_FULFILLED = "FETCH_PLAYER_FULFILLED";
const REMOVE_PLAYER_FULFILLED = "REMOVE_PLAYER_FULFILLED";

// ACTION CREATORS;
export const fetchPlayer = (lastName, firstName) => {
  return {
    type: FETCH_PLAYER,
    payload: getPlayer(lastName, firstName)
  }
}

export const removePlayer = () => {
  return {
    type: REMOVE_PLAYER
  }
}

// REDUCER;
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PLAYER_FULFILLED:
      return action.payload;
    case REMOVE_PLAYER_FULFILLED:
      return {};
    default:
      return state;
  }
}
