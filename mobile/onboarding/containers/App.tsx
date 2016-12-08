import * as React from 'react';
import Header from '../components/Header';

class App extends React.Component<{},{}> {
    static propTypes = {
        children: React.PropTypes.node,
    };

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;
