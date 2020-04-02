import React from 'react';
import Char from './Char'
import app from './Server'

const getRandomChar = () => {
    let ans = {
        results:[]
    }
    let i = 0;
    let randChar;
    fetch(`https://rickandmortyapi.com/api/character/${randChar}`)
            .then((response) => response.json())
            .then((data) => {
                ans.results = data;
            })
    // while (i < 12) {
    //     randChar = Math.floor(Math.random() * 100);
    //     // fetch(`https://rickandmortyapi.com/api/character/${randChar}`)
    //     //     .then((response) => response.json())
    //     //     .then((data) => {
    //     //         ans.results = data;
    //     //     })
    //         // .then((response) => {
    //         //     if (response.json().status = "Alive" || "Dead") {
    //         //         ans.results[i] = response.json();
    //         //         i += 1;
    //         //         return response.json();
    //         //     }
    //         // })
    // }
    console.log(ans);
    return ans;
}

// class Random extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             results: []
//         }
//     }
//     componentDidMount() {
//         this.setState({ isLoading: true })
//         fetch("https://rickandmortyapi.com/api/character")
//             .then((response) => response.json())
//             .then((list) => this.setState({ results: list.results }))
//     }

//     renderCharacters() {
//         getRandomChar();
//         const {results} = this.state;
//         const allCharacters = results.map((item) => <Char key={item.id} name={item.name} status={item.status} species={item.species} gender={item.gender} location={item.location.name} photo={item.image}  />);
//         return allCharacters;
//     }

//     render() {
//         const { results } = this.state;
//         return (
//             <div className='characters'>
//                 {this.renderCharacters()}
//             </div>
//         );
//     }
// }

export default getRandomChar;
