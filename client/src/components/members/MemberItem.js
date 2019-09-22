import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MemberItem = ({
  member: {
    _id,
    memberTeamName,
    memberPlayoffs,
    memberChampionships,
    memberLastPlaces
  }
}) => {
  return (
    <div className="profile bg-light">
      {/* <img src="#" alt="" className="round-img" /> */}
      <div>
        <h2>{memberTeamName}</h2>
        <Link to={`/view-member/${_id}`} className="btn btn-primary">
          View Member
        </Link>
      </div>
      {/* TODO: Add image once uplaod capability added. Add status/tagline section*/}
      <ul>
        <li className="text-primary">
          <i className="fas fa-thumbs-up" />{' '}
          {memberPlayoffs.map((memberPlayoff, index) => (
            <span key={index}>{memberPlayoff} </span>
          ))}
        </li>
        <li className="text-primary">
          <i className="fas fa-trophy" />{' '}
          {memberChampionships.map((memberChampionship, index) => (
            <span key={index} className="text-primary">
              {memberChampionship}{' '}
            </span>
          ))}
        </li>
        <li className="text-primary">
          <i className="fas fa-thumbs-down" />{' '}
          {memberLastPlaces.map((memberLastPlace, index) => (
            <span key={index}>{memberLastPlace} </span>
          ))}
        </li>
      </ul>
    </div>
  );
};

MemberItem.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberItem;
