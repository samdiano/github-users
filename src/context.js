import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
   switch (action.type) {
     default:case 'SEARCH_USERS':
      return {
         ...state, 
         users: action.payload,
         heading: 'Search Results'
      }
   }
}

export class Provider extends Component {

  state = {
    users : [],
    heading: '',
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios.get('https://api.github.com/search/users?q=top')
    .then(res => {
      this.setState({users: res.data.items, heading: ''});
    })
    .catch(err => console.log(err))
  };
  render() {
  console.log(this.state);
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer =Context.Consumer
