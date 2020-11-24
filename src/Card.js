import './Card.css';
import pok from './pok.png';

function Card(props) {
  if (props.load) {
    return (
      <div className="card">
        <h2 className="poke">Name: {props.name}</h2>
        <img className="photo" src={props.img} alt="" />

        <h3> Type: {props.type}</h3>
      </div>
    );
  } else {
    return (
      <div className="card">
        <h2 className="poke">{props.name} could not be found</h2>
        <img className="photo" src={pok} alt="" />
      </div>
    );
  }
}

export default Card;
