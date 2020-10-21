import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharacterList } from '../../services/get-character-list';

export default class List extends Component {
  state = {
    characters: []
  }
  componentDidMount = () => {
    getCharacterList()
      .then(characters => this.setState({ characters }));
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    // eslint-disable-next-line no-unused-vars
    this.setState = (state, callback) => {
      return;
    };
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
