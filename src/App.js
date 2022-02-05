import React from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: '', 
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => (response.json()))
            .then(users => this.setState({monsters: users}))
    }

    handleChange = (e) => {
        this.setState( {searchField: e.target.value} )
    } 

    render() {
        // this is same as const monster = this.state.monsters; const searchField = this.state.searchField;
        const { monsters, searchField } = this.state;

        const filteredMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )

        return(
            <div className="App">
                <h1 className="title">Monsters Rolodex</h1>
                <SearchBox 
                    placeholder="Search..." 
                    handleChange={this.handleChange} 
                />
                <CardList 
                    monsters={filteredMonsters} 
                />
            </div>
        )
    }
}

export default App;
