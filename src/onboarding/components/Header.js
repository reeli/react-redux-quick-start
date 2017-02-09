import React, { Component } from 'react';
import Header_ from './Header_.styl';

class Header extends Component {
  render() {
    return (
      <div>
        Header
        <div className={Header_.cat}>cat</div>
      </div>
    );
  }
}

export default Header;
