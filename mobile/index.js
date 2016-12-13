import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import getRouterRoutes from './getRouterRoutes';
import getTopList from '../modules/entities/reducers/getTopList';

const reducers = {
  topList: getTopList
};

const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <Router
      history={hashHistory}
      routes={getRouterRoutes()}
    />
  </Provider>, document.getElementById('app'));
