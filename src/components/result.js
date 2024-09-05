import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Result extends Component {

    constructor(props) {
        super(props);

        this.state = {
            height: 0
        };
    }

    renderSpecies() {
        let species = this.props.species.map((specie, id) => {
            return <span className="result-species" key={id}>{specie}</span>
        })
        return species;
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
        
                    <div className='recent-result__species'>
                        {this.renderSpecies()}
                    </div>
                </li>
            )
        } else if (this.props.type === "result") {
            return (
                <li className='result-result'>
                    <div className='result-result__species'>
                        {this.renderSpecies()}
                    </div>

                    <div className='result-result__name'>
                        <a href={this.props.name}
                            onMouseEnter={() => this.setState({ height: 70 })}
                            onMouseLeave={() => this.setState({ height: 0 })}
                        >
                        {this.props.name}</a>
                    </div>

                    <AnimateHeight
                        duration={500}
                        height={this.state.height}
                    >
                        <div className='result-result__starships'>
                            {this.renderStarships()}
                        </div>
                    </AnimateHeight>
                </li>
            )
        }
    }
}

export default Result;