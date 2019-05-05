import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
    // 使用箭头函数的时候不需要 .bind(this) 操作
    // this.removeCharacter = this.removeCharacter.bind(this);
  }

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  

  render() {
    const { characters } = this.state;
    return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Add a character with a name and a job to the table.</p>
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
      <h3>Add New</h3>
      <Form handleSubmit={this.handleSubmit} />
    </div>
    )
  }
}

export default App;
