import React, { Component, PropTypes } from 'react';
import config from 'config';

class App extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
        {config.API_BASE_URL}
        {this.props.children}
      </div>
    );
  }
}

export default App;

