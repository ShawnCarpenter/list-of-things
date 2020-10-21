import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharacterList } from '../../services/get-character-list';

export default class List extends Component {
  state = {
    characters: []
  }
  componentDidMount(){
    getCharacterList()
      .then(characters => this.setState({ characters }));
  }
  render() {
    const { characters } = this.state;
    const names = characters.map(character => 
      <Link to={`detail/${character.name}`} 
        key={character.name}>
        <li 
          key={character.name}>
          {character.name}
        </li>
      </Link>);
    return (
      <ul>{
        names
      } 
      </ul>
    );
  }
}
