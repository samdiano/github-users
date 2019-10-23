import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import User from './User';

export default class Tracks extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { users, heading } = value;
					if (users === undefined || users.length === 0) {
						return <Spinner />;
					} else {
						return (
							<React.Fragment>
								<h1 className='text-center mb-4'>{heading}</h1>
								<div className='row'>
									{users.map(item => (
										<User key={item.id} user={item} />
									))}
								</div>
							</React.Fragment>
						);
					}
				}}
			</Consumer>
		);
	}
}
