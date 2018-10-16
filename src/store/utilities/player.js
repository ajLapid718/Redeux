// ACTION TYPES (FOR ACTION CREATORS AND FOR AN EPIC);
export const FETCH_PLAYER = "FETCH_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";

// ACTION TYPES (FOR ACTION CREATORS AND FOR THE REDUCER);
const FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS";
const REMOVE_PLAYER_SUCCESS = "REMOVE_PLAYER_SUCCESS";

// ACTION CREATORS (FOR COMPONENTS);
export const fetchPlayer = (lastName, firstName) => {
  return {
    type: FETCH_PLAYER,
    lastName: lastName,
    firstName: firstName
  }
}

export const removePlayer = () => {
  return {
    type: REMOVE_PLAYER
  }
}

// ACTION CREATORS (FOR EPIC);
export const fetchPlayerSuccess = (player) => {
  return {
    type: FETCH_PLAYER_SUCCESS,
    payload: player
  }
}

export const removePlayerSuccess = () => {
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
