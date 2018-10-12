// Here, we will import all of our individual sagas and then organize them into a single root saga;
import { all } from 'redux-saga/effects';

// Individual sagas;
import playerSagaWatcher from './player';

// Root saga;
function* rootSaga() {
  yield playerSagaWatcher;
}

// We then export the collective root saga to be ran elsewhere and used as middleware in our Redux store;
export default rootSaga;
