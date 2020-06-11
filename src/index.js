import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/AppContainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
