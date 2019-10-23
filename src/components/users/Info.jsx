import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import Repo from './Repo';
import { Link } from 'react-router-dom';

class Info extends Component {
	state = {
		user: {},
		repos: []
	};

	componentDidMount() {
		axios
			.get(`https://api.github.com/users/${this.props.match.params.id}`)
			.then(res => {
				console.log(res.data);
				this.setState({ user: res.data });
				return axios.get(
					`https://api.github.com/users/${res.data.login}/repos`
				);
			})
			.then(res => {
				console.log(res.data);
				this.setState({ repos: res.data });
			})
			.catch(err => console.log(err));
	}
	render() {
		const { user, repos } = this.state;
		console.log(user);
		if (
			user === undefined ||
			repos === undefined ||
			Object.keys(user).length === 0 ||
			Object.keys(repos).length === 0
		) {
			return <Spinner />;
		} else {
			return (
				<React.Fragment>
					<Link to='/' className='btn btn-dark btn-sm mb-4'>
						Go back
					</Link>
					<div className='card'>
						<div className='card-body row'>
							<div className='col-md-3'>
								<img className='image' src={user.avatar_url} alt='' />
								<div className='mt-2'>
									<i className='fas fa-map-marker-alt'></i>{' '}
									<span>{user.location}</span>
								</div>
							</div>
							<div className='col-md-8 mt-2'>
								<h2>{user.name}</h2>
								<h3 className='text-secondary'>{user.login}</h3>
								<div className='row mt-4 pt-5'>
									<div className='col-md-4'>
										<span className='card-text mt-5'>
											<strong>Repositories</strong>: {user.public_repos}
										</span>
									</div>
									<div className='col-md-4'>
										<span className='card-text mt-5'>
											<strong>Followers</strong>: {user.followers}
										</span>
									</div>
									<div className='col-md-4'>
										<span className='card-text mt-5'>
											<strong>Following</strong>: {user.following}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<ul className='list-group mt-3'>
						<li className='list-group-item'>
							<div className='row'>
								{repos.map(repo => (
									<Repo key={repo.id} repo={repo} />
								))}
							</div>
						</li>
					</ul>
				</React.Fragment>
			);
		}
	}
}
export default Info;
