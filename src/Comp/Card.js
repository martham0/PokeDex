import React from 'react';
import './Card.css';
import pok from './img/pok.png';
import Tilt from 'react-tilt';

function Card(props) {
  if (props.load) {
    return (
      <div>
        <Tilt options={{ max: 38 }}>
          <div className="card">
            <h2 className="pokemon_name"> {props.name}</h2>
            <img width="200px" src={props.img} alt="" />
            <h3>
              Type:
              <br />
              {props.type}
            </h3>
          </div>
        </Tilt>
      </div>
    );
  } else {
    return (
      <Tilt className="Tilt" options={{ max: 38 }}>
        <div className="card">
          <h2 className="poke">
            Sorry, we couldn't find {'\n'}
            {props.name}.
          </h2>
          <img width="200px" src={pok} alt="" />
        </div>
      </Tilt>
    );
  }
}

export default Card;
