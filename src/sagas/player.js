import { call, put, takeLatest } from 'redux-saga/effects';
import { SET_PLAYER, REMOVE_PLAYER, deliverPlayer, clearPlayer } from '../actions';
import axios from 'axios';

// Declare asynchronous functions that make API requests and output a Promise for a response;
function fetchPlayer(lastName, firstName) {
  return axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`);
}

// Declare worker sagas, which will perform API calls when the watcher saga sees the action;
function* setCurrentPlayer(action) {
  try {
    const response = yield call(fetchPlayer, action.lastName, action.firstName);
    const nbaPlayer = response.data;
    yield put(deliverPlayer(nbaPlayer));
  }
  catch (err) {
    console.log(err);
  }
}

function* removeCurrentPlayer() {
  try {
    yield put(clearPlayer());
  }
  catch (err) {
    console.log(err);
  }
}

// Normally, we would declare a watcher saga generator function here, which would watch for actions dispatched to the store and instructs the worker saga to fire;
// For code splitting purposes, we'll be putting these effects into an array, which will be collectively "yielded" in the root saga;
const playerSagaWatcher = [
  takeLatest(SET_PLAYER, setCurrentPlayer),
  takeLatest(REMOVE_PLAYER, removeCurrentPlayer)
];

export default playerSagaWatcher;
