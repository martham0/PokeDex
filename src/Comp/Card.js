import './Card.css';
import pok from './pok.png';
import Tilt from 'react-tilt';

function Card(props) {
  if (props.load) {
    return (
      <div>
        <Tilt options={{ max: 38 }}>
          <div className="card">
            <h2 className="poke">Name: {props.name}</h2>
            <img className="photo" src={props.img} alt="" />
            <h3> Type: {props.type}</h3>
          </div>
        </Tilt>
      </div>
    );
  } else {
    return (
      <Tilt className="Tilt" options={{ max: 38 }}>
        <div className="card">
          <h2 className="poke">{props.name} could not be found</h2>
          <img className="photo" src={pok} alt="" />
        </div>
      </Tilt>
    );
  }
}

export default Card;
