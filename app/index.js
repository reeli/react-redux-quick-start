import Style from './index.styl';
import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';

render(<div className={Style.container}><Header/></div>, document.getElementById('app'));