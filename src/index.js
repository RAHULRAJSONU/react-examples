import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './apps/context-example/App';

// import App from './apps/todo/App';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './apps/todo/store/reducers';

// const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root')
)