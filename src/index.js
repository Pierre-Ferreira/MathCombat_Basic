import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

export const history = createHistory();

// const initialState = {}
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composedEnhancers,
);

ReactDOM.render(

  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

// import { createStore, applyMiddleware, compose } from 'redux'
// import { routerMiddleware } from 'react-router-redux'
// import thunk from 'redux-thunk'
// import createHistory from 'history/createBrowserHistory'
// import rootReducer from './modules'
//
// export const history = createHistory()
//
// const initialState = {}
// const enhancers = []
// const middleware = [
//   thunk,
//   routerMiddleware(history)
// ]
//
// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension
//
//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }
//
// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// )
//
// const store = createStore(
//   rootReducer,
//   initialState,
//   composedEnhancers
// )
//
// export default store
