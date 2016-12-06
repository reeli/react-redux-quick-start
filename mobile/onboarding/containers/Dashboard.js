import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component {
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
