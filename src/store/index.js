// Necessities and accessories for constructing our Redux store;
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// Individual reducers altogether under an alias;
import * as reducers from '../reducers';

// Root saga;
import rootSaga from '../sagas';

// Create the saga middleware;
const sagaMiddleware = createSagaMiddleware();

// Construct our Redux store;
const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true});
const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
const store = createStore(rootReducer, middleware);

// Run the saga;
sagaMiddleware.run(rootSaga);

// Export our store by default, which will be provided to and injected within our entire application;
export default store;
