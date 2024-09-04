import React, { Component } from 'react';

class Result extends Component {

    renderFilms() {
        let films = this.props.films.map((film, id) => {
            return <span className="result-films" key={id}>{film}</span>
        })
        return films;
    }

    renderStarships() {
        let starships = this.props.starships.map((starship, id) => {
            return (
                <div className="result-starship" key={id}>
                    <div className="result-starship__box"></div>
                    <div className="result-starship__link">
                        <a href={starship}>Useful link #{id + 1}</a>
                    </div>
                </div>
            )
        }) 
        return starships;
    }

    render() {
        if(this.props.type === "recent") {
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
        } else if (this.props.type === "result") {
            return (
                <li className='result-result'>
                    <div className='result-result__films'>
                        {this.renderFilms()}
                    </div>

                    <div className='result-result__name'>
                        {this.props.name}
                    </div>

                    <div className='result-result__starships'>
                        {this.renderStarships()}
                    </div>
                </li>
            )
        }
    }
}

export default Result;