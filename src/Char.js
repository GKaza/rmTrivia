import React from 'react';
import Characters from './Characters.js'


function Char (props) {
    return (
        <div className ="char">
            <img src={props.photo}></img>
            <h3>{props.name}</h3>
            <p>Gender: {props.gender}</p>
            <p>Species: {props.species}</p>
            <p>Location: {props.location}</p>
            <p>Status: {props.status}</p>
        </div>
      );
}

export default Char;