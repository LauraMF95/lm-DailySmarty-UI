import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from './searchBar';
import RecentResults from './recentResults';

import { connect } from 'react-redux';
import * as actions from "../actions";

class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchResultsWithQuery(query, () => {
      this.props.history.push("/results");
    });
}

  render() {
    return (
      <div className='home'>
        <Logo />
        <SearchBar page="home" onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <RecentResults />
      </div>
    );
  }
}

export default connect(null, actions)(Home);