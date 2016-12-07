import * as React from 'react';
import {Link} from 'react-router';

class Dashboard extends React.Component<{},{}> {
    render() {
        return (
            <div>
                Dashboard
                <div>
                    <Link to="/inbox">Inbox</Link>
                </div>
            </div>
        );
    }
}

export default Dashboard;
