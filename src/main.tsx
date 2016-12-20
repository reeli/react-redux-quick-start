import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import getRouterRoutes from './getRouterRoutes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './main/rootReducer';

const initialState = {};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={hashHistory}
      routes={getRouterRoutes()}
    />
  </Provider>, document.getElementById('app'));
