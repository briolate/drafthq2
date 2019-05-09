import React from 'react';
import PropTypes from 'prop-types';

const MemberTop = ({ member: { memberTeamName } }) => (
  <div className="profile-top bg-primary p-2">
    <h1 className="large">{memberTeamName}</h1>
  </div>
);

MemberTop.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberTop;
