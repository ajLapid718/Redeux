// ACTION TYPES;
export const FETCH_PLAYER = "FETCH_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";

export const FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS";
export const REMOVE_PLAYER_SUCCESS = "REMOVE_PLAYER_SUCCESS";

// ACTION CREATORS (FOR COMPONENTS);
// The actions in this section will be dispatched within a component and then will be picked up by the watcher saga, which will then boot up the corresponding worker saga;
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

// ACTION CREATORS (FOR SAGAS);
// The actions in this section will be passed to a "put" invocation within a worker saga, which will then be handled by the reducer accordingly;
export const fetchPlayerSuccess = (nbaPlayer) => {
  return {
    type: FETCH_PLAYER_SUCCESS,
    payload: nbaPlayer
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
