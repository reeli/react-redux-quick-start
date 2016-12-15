import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import getRouterRoutes from './getRouterRoutes';
import './index.styl';

ReactDOM.render(
    <Router
        history={hashHistory}
        routes={getRouterRoutes()}
    />, document.getElementById('app'));
