import React, { Component } from 'react';
import axios from 'axios';
 import { Consumer } from '../../context';

class Search extends Component {
  state = {
    name: ''
  }

  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/search/users?q=${this.state.name}`)
      .then(res => {
        // console.log(res)
        axios.get(`https://api.github.com/users/${res}`);
      dispatch({
        type: 'SEARCH_USERS',
        payload: res.data.items
      });
    })
    .catch(err => console.log(err))
  }
  onChange = (dispatch, e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      this.findTrack(dispatch, e);
  })
  }

  render() {
    return (
      <Consumer>
         {value => {
          const { dispatch } = value;
        
          return (
            <div className='card card-body mb-4 p-4'>
                 <h1 className='display-5 text-center'>
                  <i className='fas fa-user'></i> Search Github Users
                 </h1>
                 {/* <p className='lead text-center'>Get the lyrics for any song</p> */}
                 <form onSubmit={this.findTrack.bind(this, dispatch)}>
                   <div className='form-group'>
                     <input type='text'
                     className='form-control form-control-lg' 
                     placeholder='name ...' 
                     name='name' 
                     value={this.state.name } 
                     onChange={this.onChange.bind(this, dispatch)}
                     />
                   </div>
                   {/* <button className='btn btn-primary btn-lg btn-block mb-5' type='submit'>Get Track Lyrics</button> */}
                 </form>
              </div>
            )
         }}
      </Consumer>
    )
  }
}
export default Search;
