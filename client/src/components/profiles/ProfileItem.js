import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name },
    teamName,
    playoffs,
    championships,
    lastPlaces
  }
}) => {
  return (
    <div className="profile bg-light">
      {/* <img src="#" alt="" className="round-img" /> */}
      <div>
        <h2>{name}</h2>
        <p>{teamName}</p>
        <Link to={`profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      {/* TODO: Add image once uplaod capability added. Add status/tagline section*/}
      <ul>
        <li className="text-primary">
          <i className="fas fa-thumbs-up" />{' '}
          {playoffs.map((playoff, index) => (
            <span key={index}>{playoff} </span>
          ))}
        </li>
        <li className="text-primary">
          <i className="fas fa-trophy" />{' '}
          {championships.map((championship, index) => (
            <span key={index} className="text-primary">
              {championship}{' '}
            </span>
          ))}
        </li>
        <li className="text-primary">
          <i className="fas fa-thumbs-down" />{' '}
          {lastPlaces.map((lastPlace, index) => (
            <span key={index}>{lastPlace} </span>
          ))}
        </li>
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
