// Necessities and accessories for constructing our Redux store;
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import { createEpicMiddleware } from 'redux-observable';
import { fetchPlayerEpic } from '../epics';

const epicMiddleware = createEpicMiddleware(fetchPlayerEpic);

import { composeWithDevTools } from 'redux-devtools-extension';

// Individual reducers altogether under an alias;
import * as reducers from '../reducers';

// Construct our Redux store;
const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true});
const middleware = composeWithDevTools(applyMiddleware(epicMiddleware, logger));
const store = createStore(rootReducer, middleware);

// Export our store by default, which will be provided to and injected within our entire application;
export default store;
