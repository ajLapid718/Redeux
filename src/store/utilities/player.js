import axios from 'axios';

// ASYNCHRONOUS CALLS (FOR PAYLOADS IN ACTIONS);
const getPlayer = (lastName, firstName) => {
  return axios
    .get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
    .then(response => response.data)
}

const removePlayerPromise = () => new Promise(function(resolve, reject) {
  setTimeout(function() {
    try {
      resolve("This is a promise!");
    }
    catch (err) {
      reject(err);
    }
  }, 3000);
});

// ACTION TYPES (FOR ACTION CREATORS AND THE REDUCER);
const FETCH_PLAYER = "FETCH_PLAYER";
const REMOVE_PLAYER = "REMOVE_PLAYER";

const FETCH_PLAYER_FULFILLED = "FETCH_PLAYER_FULFILLED";
const REMOVE_PLAYER_FULFILLED = "REMOVE_PLAYER_FULFILLED";

// ACTION CREATORS (FOR COMPONENTS);
export const fetchPlayer = (lastName, firstName) => {
  return {
    type: FETCH_PLAYER,
    payload: getPlayer(lastName, firstName)
  }
}

export const removePlayer = () => {
  return {
    type: REMOVE_PLAYER,
    payload: removePlayerPromise()
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
