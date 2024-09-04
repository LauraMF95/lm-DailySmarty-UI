import React, { Component } from 'react';

import { connect } from 'react-redux';

class ResultsResults extends Component {
    render() {
        return (
            <div className='results-results'>
                <div className='results-results__wrapper'>
                    <ul className='results-results__results'>
                        RESULTS GO HERE
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}
export default connect(mapStateToProps)(ResultsResults);