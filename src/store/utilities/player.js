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
