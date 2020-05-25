import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './todo/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './todo/store/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
