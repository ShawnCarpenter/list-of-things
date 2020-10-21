import React, { Component } from 'react';
import { getCharacter } from '../../services/get-character';
import PropTypes from 'prop-types';
export default class Detail extends Component {
state={}
componentDidMount(){
  const name = this.props.match.params.name;
  getCharacter(name)
    .then(character => this.setState({ ...character }));
}
render() {
  const { name, description, image, occupation } = this.state;
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

Detail.propTypes = {
  match:PropTypes.object,
};
