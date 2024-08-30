import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from './SearchBar';
import RecentResults from './recentResults';

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
          <SearchBar />
          <RecentResults />
        </div>
      </div>
    );
  }
}
