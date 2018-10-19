import axios from 'axios';
import { loop, Cmd } from 'redux-loop';

// ASYNCRHONOUS CALL;
const getPlayer = (lastName, firstName) => {
  return axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`);
}

// ACTION TYPES;
const FETCH_PLAYER = "FETCH_PLAYER";
const REMOVE_PLAYER = "REMOVE_PLAYER";

const FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS";
const REMOVE_PLAYER_SUCCESS = "REMOVE_PLAYER_SUCCESS";

// ACTION CREATORS;
const fetchPlayer = () => {
  return {
    type: FETCH_PLAYER
  }
}

const removePlayer = () => {
  return {
    type: REMOVE_PLAYER
  }
}

const fetchPlayerSuccess = (player) => {
  return {
    type: FETCH_PLAYER_SUCCESS,
    payload: player
  }
}

const removePlayerSuccess = () => {
  return {
    type: REMOVE_PLAYER_SUCCESS
  }
}

// REDUCER;
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PLAYER_SUCCESS:
      return action.payload;
    case REMOVE_PLAYER_SUCCESS:
      return {};
    default:
      return state;
  }
}
