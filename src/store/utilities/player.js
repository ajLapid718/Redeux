// ACTION TYPES;
export const SET_PLAYER = "SET_PLAYER";
export const DELIVER_PLAYER = "DELIVER_PLAYER";

export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const CLEAR_PLAYER = "CLEAR_PLAYER";

// ACTION CREATORS;
export const setPlayer = (lastName, firstName) => {
  return {
    type: SET_PLAYER,
    lastName: lastName,
    firstName: firstName
  }
}

export const deliverPlayer = (nbaPlayer) => {
  return {
    type: DELIVER_PLAYER,
    payload: nbaPlayer
  }
}

export const removePlayer = () => {
  return {
    type: REMOVE_PLAYER
  }
}

export const clearPlayer = () => {
  return {
    type: CLEAR_PLAYER
  }
}

// REDUCER;
export default (state = {}, action) => {
  switch (action.type) {
    case DELIVER_PLAYER:
      return action.payload;
    case CLEAR_PLAYER:
      return {};
    default:
      return state;
  }
}
