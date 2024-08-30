import React, { Component } from 'react';

class Result extends Component {

    renderFilms() {
        let films = this.props.films.map((film, id) => {
            return <span className="result-films" key={id}>{film}</span>
        })
        return films;
    }

    render() {
        return (
        <li className='recent-result'>
            <div className='recent-result__name'>
                {this.props.name}
            </div>

            <div className='recent-result__films'>
                {this.renderFilms()}
            </div>
        </li>
        )
    }
}

export default Result;