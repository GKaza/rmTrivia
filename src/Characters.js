import React from 'react';
import Char from './Char';

class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            isLoading: false,
            right: 0,
            counter: 0
        }
    }

    handleToUpdate = (e) => {
        if(e.target.innerText == e.target.value) this.setState({right: this.state.right + 1})
        this.setState({counter: this.state.counter + 1});
    }

    componentDidMount() {
        fetch("http://localhost:8000/")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ results: data, isLoading: false })
            })
    }

    renderCharacters() {
        const {results} =  this.state;
        const allCharacters = results.map((item) => <Char handleToUpdate = {this.handleToUpdate} key={item.id} name={item.name} status={item.status} species={item.species} gender={item.gender} location={item.location.name} photo={item.image}  />);
        return allCharacters;
    }

    render() {
        const { results, isLoading, counter, right } = this.state;
        if (isLoading) {
            return <p>Loading...</p>
        }
        if (counter == 11){
            return <h3>Finished! You got {right} out of 12!</h3>
        }
        return (
            <div className='characters'>
                {this.renderCharacters()}
            </div>
        );
    }
}

export default Characters;
