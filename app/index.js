import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Style from './index.styl';

render(<div className={Style.container}><Header /></div>, document.getElementById('app'));
