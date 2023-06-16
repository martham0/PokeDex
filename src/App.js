import React from 'react';
import { Component } from 'react';
import './App.css';
import SearchBox from './Comp/SearchBox';
import Card from './Comp/Card';
import Logo from './Comp/Logo';
import Particles from 'react-particles-js';
import pokBall from './Comp/img/pokeball.png';

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
      image: pokBall,
      type: [],
      search: '',
      // name: '',
      url: 'https://pokeapi.co/api/v2/pokemon/',
      // imgUrl: ,
      found: true,
    };
  }

  change = (event) => {
    this.setState({
      search: event.target.value,
      found: true,
    });
  };

  submit = (event) => {
    let allTps = ['|'];
    fetch(this.state.url + this.state.search.toLowerCase())
      .then((res) => res.json())
      .then((pok) => {
        // Fix this so if it only has 1 type no comma
        pok.types.map((tp) => {
          allTps.push(tp.type.name + '|');
          return null;
        });
        this.setState({
          type: allTps,
          image: pok.sprites.front_default,
          name: pok.name,
        });
      })
      .catch((error) => {
        this.setState({
          found: false,
          name: this.state.search,
        });
        console.log(
          'Sorry pokemon could not be found. Check spelling and try again'
        );
      });
  };
  // temp comments for now
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
        {/* ADD a randamozied button to randomly search a pokemon https://www.npmjs.com/package/pokemon */}
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
