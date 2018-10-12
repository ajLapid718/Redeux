import { call, put, takeLatest } from 'redux-saga/effects';

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
