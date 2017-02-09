import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../components/Header';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Link to="/inbox">Inbox</Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
