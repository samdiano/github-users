import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import User from './User';

export default class Tracks extends Component {
  render() {
    return (
     <Consumer>
       {
         value => { 
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />
          } else {
            return (
              <React.Fragment>
                <h1 className='text-center mb-4'>{heading}</h1>
                <div className='row'>
                  {track_list.map(item => (
                    <User
                    key = {item.track.track_id}
                    track = {item.track}
                    />
                  ))}
                </div>
              </React.Fragment>
            )
          }
         }
       }
     </Consumer>
    )
  }
}
