import React from 'react';
import { Link } from 'react-router-dom'

const Track = (props) => {
  const { user } = props;
  return (
    <div className='col-md-6'>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          {/* <h5>{user.login}</h5> */}
          <p className="card-text">
            <img className="thumb-image" src={user.avatar_url} alt="" /> 
            {/* <br /> */}
            <strong><i className='fas fa-userss'></i> Username</strong>: {user.login}
          </p>
          <Link to={`lyrics/track/${user.track_id}`} className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right"></i> View User Details
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Track;
