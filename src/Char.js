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
            <p>Status: <button className="btn" value={props.status} onClick={(e) => {props.handleToUpdate(e)}}>Alive</button><button className="btn" value={props.status} onClick={(e) => {props.handleToUpdate(e)}}>Dead</button></p>
        </div>
      );
}

export default Char;
