import { Component } from 'react';
import './App.css';
import SearchBox from './Comp/SearchBox';
import Card from './Comp/Card';
import Logo from './Comp/Logo';
import Particles from 'react-particles-js';

const particle = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      type: [],
      name: '',
      url: 'https://pokeapi.co/api/v2/pokemon/',
      imgUrl: 'https://pokeres.bastionbot.org/images/pokemon/',
      found: true,
    };
  }

  change = (event) => {
    this.setState({
      name: event.target.value,
      found: true,
      image: '',
      type: [],
    });
  };

  submit = (event) => {
    let allTps = [];
    fetch(this.state.url + this.state.name.toLowerCase())
      .then((res) => res.json())
      .then((pok) => {
        pok.types.map((tp) => {
          allTps.push(tp.type.name + ', ');
        });
        this.setState({
          type: allTps,
          image: this.state.imgUrl + `${pok.id}.png`,
        });
      })
      .catch((error) => {
        this.setState({
          found: false,
        });
        console.log(
          'Sorry no pokemon could be found. Check spelling and try again'
        );
      });
  };

  render() {
    return (
      <div className="App">
        <Particles className="Particles" params={particle} />
        <title>PokeDex</title>
        <Logo />
        <h1>PokeDex</h1>
        <SearchBox
          change={this.change}
          submit={this.submit}
          name={this.state.name}
        />
        <h2>{this.state.found}</h2>
        <Card
          name={this.state.name}
          type={this.state.type}
          img={this.state.image}
          load={this.state.found}
        />
      </div>
    );
  }
}

export default App;
