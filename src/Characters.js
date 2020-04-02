import React from 'react';
import Char from './Char'

class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            isLoading: false,
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        fetch("./Server.js")
            .then((response) => response.json())
            .then((data) => this.setState({ results: data.results, isLoading: false }))
    }

    renderCharacters() {
        const {results} = this.state;
        const allCharacters = results.map((item) => <Char key={item.id} name={item.name} status={item.status} species={item.species} gender={item.gender} location={item.location.name} photo={item.image}  />);
        return allCharacters;
    }

    render() {
        const { results, isLoading } = this.state;
        if (isLoading) {
            console.log(results)
            return <p>Loading...</p>
        }
        return (
            <div className='characters'>
                {this.renderCharacters()}
            </div>
        );
    }
}
//fetch make api call in componentDidMount 
//render loading..
//render api results


export default Characters;
