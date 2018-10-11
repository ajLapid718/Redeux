import axios from 'axios';

// ACTION TYPES;
const SET_PLAYER = "SET_PLAYER";

// ACTION CREATORS;
const setPlayer = (player) => {
  return {
    type: SET_PLAYER,
    payload: player
  }
}

// THUNK CREATORS;
export const setPlayerThunk = (lastName, firstName) => (dispatch) => {
  return axios
    .get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
    .then(res => res.data)
    .then(nbaPlayer => dispatch(setPlayer(nbaPlayer)))
    .catch(err => console.log(err))
}

// REDUCER;
export default (state = {}, action) => {
  switch (action.type) {
    case SET_PLAYER:
      return action.payload;
    default:
      return state;
  }
}
