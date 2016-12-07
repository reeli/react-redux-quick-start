import * as React from 'react';
import Header from '../components/Header';

class App extends React.Component<{},{}> {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.prototype.propTypes = {
  children: PropTypes.node,
};

export default App;
