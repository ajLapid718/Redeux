// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store;
export { default as currentPlayer } from '../store/utilities/player';
export { default as teamNames } from '../store/utilities/teamNames';