import React from 'react';

import CardsList from './Components/CardsList/CardsList'
import SearchBox from './Components/SearchBox/SearchBox'
import './App.css'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    console.log(searchField)

    return (
      <div className='App'>
        <h1>MONSTERS</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardsList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
