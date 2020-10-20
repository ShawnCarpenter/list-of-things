import React, { Component } from 'react';
import { getPeople } from '../../services/get-data';

export default class List extends Component {
  state = {
    users: []
  }
  componentDidMount(){
    getPeople()
      .then(people => this.setState({ users:people }));
  }
  render() {
    const { users } = this.state;
    const names = users.map(user => <li 
      key={user.uuid}>
      {user.firstname} {user.lastname}
    </li>);
    return (
      <ul>{
        names
      } 
      </ul>
    );
  }
}
