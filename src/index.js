import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import { watchIncrement } from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(watchIncrement);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// STORE -> GLOBALISED STATE
// ACTION

// REDUCER ->update store
// DISPATCH --->>>fire
