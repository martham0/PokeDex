import Tilt from 'react-tilt';
import './Logo.css';
import pokedex from './pokedex.png';

function Logo() {
  return (
    <div>
      <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{ height: 100, width: 100 }}
      >
        <div>
          <img className="photo" src={pokedex} alt="" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
