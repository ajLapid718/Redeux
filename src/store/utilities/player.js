import axios from 'axios';

// ACTION TYPES;
const SET_PLAYER = "SET_PLAYER";
const REMOVE_PLAYER = "REMOVE_PLAYER";

// ACTION CREATORS;
export const setPlayer = (player) => {
  return {
    type: SET_PLAYER,
    payload: player
  }
}

export const removePlayer = () => {
  return {
    type: REMOVE_PLAYER
  }
}

// // THUNK CREATORS;
// export const setPlayerThunk = (lastName, firstName) => (dispatch) => {
//   return axios
//     .get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
//     .then(res => res.data)
//     .then(nbaPlayer => dispatch(setPlayer(nbaPlayer)))
//     .catch(err => console.log(err));
// }

// export const removePlayerThunk = () => (dispatch) => {
//   return dispatch(removePlayer());
// }

// REDUCER;
export default (state = {}, action) => {
  switch (action.type) {
    case SET_PLAYER:
      return action.payload;
    case REMOVE_PLAYER:
      return {};
    default:
      return state;
  }
}
