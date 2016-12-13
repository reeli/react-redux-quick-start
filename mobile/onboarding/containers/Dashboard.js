import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getTopListAction } from '../../../modules/entities/actions/books';

@connect((state)=> {
  return {
    topList: state
  }
}, (dispatch)=> {
  return {
    fetchTopList: () => dispatch(getTopListAction())
  }
})
class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchTopList();
  }

  render() {
    const { topList } = this.props;
    console.log(topList, 'topList');
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
