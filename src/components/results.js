import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './SearchBar';
import ResultsResults from './resultsResults';

import { connect } from 'react-redux';
import * as actions from "../actions";

class Results extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchResultsWithQuery(query);
  }

  render() {
    return (
      <div>
        <Logo size={55} />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <ResultsResults />
      </div>
    )
  }
}
export default connect(null, actions)(Results);