import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from './SearchBar';
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
      <div className='app'>
        <div>
          <Logo />
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
          <RecentResults />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);