import React, { Component } from 'react';

import { connect } from 'react-redux';
import Result from './result';

class ResultsResults extends Component {

    renderResults() {
        const results = this.props.results.map((result, id) => {
            return <Result key={id} {...result}/>
        })
        return results;
    }

    render() {
        return (
            <div className='results-results'>
                <div className='results-results__wrapper'>
                    <ul className='results-results__results'>
                        {this.renderResults()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.results.resultsResults
    }
}
export default connect(mapStateToProps)(ResultsResults);