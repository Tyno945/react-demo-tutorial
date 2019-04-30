import React, { Component } from 'react';
import './App.css';
import Table from './Table'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },
      ]
    }

    this.removeCharacter = this.removeCharacter.bind(this);
  }

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    })
  }
  

  render() {
    const { characters } = this.state;
    return (
    <div className="App">
      <h1>Hello, React!</h1>
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
    </div>
    )
  }
}

export default App;
