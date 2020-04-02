import React from 'react';
import Char from './Char'
import app from './Server'
import getRandomChar from './Server'
import Random from './Random';


class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((list) => this.setState({ results: list.results }))
    }

    renderCharacters() {
        Random.getRandomChar();
        const {results} = this.state;
        const allCharacters = results.map((item) => <Char key={item.id} name={item.name} status={item.status} species={item.species} gender={item.gender} location={item.location.name} photo={item.image}  />);
        return allCharacters;
    }

    render() {
        const { results } = this.state;
        return (
            <div className='characters'>
                {this.renderCharacters()}
            </div>
        );
    }
}


export default Characters;
