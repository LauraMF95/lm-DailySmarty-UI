import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

import Result from './result';

class RecentResults extends Component {

    componentDidMount() {
        this.props.fetchRecentResults();
    }

    renderResults = function() {
        const results = this.props.recentResults.map((result, id) => {
            if(id < 3) {
                return (
                    <Result {...result} key={id} />
                )
            }
        })

        return results;
    }

    render() {
        return (
            <div className='recent-results'>
                <div className='recent-results-wrapper'>
                    <div className='recent-results__heading'>Recent Results</div>
                    <ul className='recent-results__results'>
                        {this.renderResults()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        recentResults: state.results.recentResults
    }
}

export default connect(mapStateToProps, actions) (RecentResults);