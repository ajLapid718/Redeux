import { call, put, takeLatest } from 'redux-saga/effects';
import { SET_PLAYER, REMOVE_PLAYER, setPlayer, removePlayer } from '../actions';
import axios from 'axios';

// Declare asynchronous functions that make API requests and output a Promise for a response;
function fetchPlayer(lastName, firstName) {
  return axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`);
}

// Declare worker sagas, which will perform API calls when the watcher saga sees the action;
function* setCurrentPlayer(lastName, firstName) {
  try {
    const nbaPlayer = yield call(fetchPlayer(lastName, firstName));
    console.log(nbaPlayer);
    yield put({type: SET_PLAYER, payload: nbaPlayer});
  }
  catch (err) {
    console.log(err); // It is better practice to dispatch/put an action where the type signifies an error occurred;
  }
}

function* removeCurrentPlayer() {
  try {
    yield put({type: REMOVE_PLAYER});
  }
  catch (err) {
    console.log(err); // It is better practice to dispatch/put an action where the type signifies an error occurred;
  }
}

// Normally, we would declare a watcher saga generator function, which watches for actions dispatched to the store and boots up and fires the worker saga;
// For code splitting purposes, we'll be putting these effects into an array, which will be collectively "yielded" in the root saga;

function* playerSagaWatcher() {
  yield takeLatest(SET_PLAYER, setCurrentPlayer);
  yield takeLatest(REMOVE_PLAYER, removeCurrentPlayer);
}

// const playerSagaWatcher = [
//   takeLatest(SET_PLAYER, setCurrentPlayer),
//   takeLatest(REMOVE_PLAYER, removeCurrentPlayer)
// ];

export default playerSagaWatcher;
