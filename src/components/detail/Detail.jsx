import React, { Component } from 'react';
import { getCharacter } from '../../services/get-character';

export default class Detail extends Component {
  state = {

  }
  componentDidMount(){
    const name = this.props.match.params.name;
    getCharacter(name)
      .then(character => this.setState({ ...character }));
  }
  render() {
    const { name, gender, status, description, image, occupation } = this.state;
    console.log(this.state);
    return (
      <div className="details">
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <div>Occupation: {occupation}</div>
        <div>{description}</div>
      </div>
    );
  }
}
