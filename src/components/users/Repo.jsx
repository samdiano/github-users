import React from 'react';

const Track = props => {
	const { repo } = props;
	return (
		<div className='col-md-6'>
			<div className='card mb-4 shadow-sm'>
				<div className='card-body'>
					<div className='row'>
						<div className='col-md-8' >
							<h4 className="text-left">{repo.name}</h4>
						</div>
						<div className='col-md-4'>
							<span className="text-primary">{repo.language}</span>
						</div>
					</div>
					<p className='card-text text-left'>
						{repo.description ? (
							`${repo.description.substring(0, 45)}...`
						) : (
							<br />
						)}
					</p>
					<a href={`${repo.clone_url}`} target="_blank" rel="noopener noreferrer" className='btn btn-secondary btn-block'>
						<i className='fas fa-eye'></i> View On Github
					</a>
				</div>
			</div>
		</div>
	);
};

export default Track;
