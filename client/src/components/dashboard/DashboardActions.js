import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn">
        <i className="fas fa-user-circle text-primary" /> Edit Profile
      </Link>
      <Link to="/add-draft" className="btn btn-light">
        <i className="fas fa-calendar text-info mr-2" /> Add Draft
      </Link>
      <Link to="/members" className="btn btn-light">
        <i className="fas fa-user-friends text-info mr-2" /> Members
      </Link>
      <Link to="/create-member" className="btn btn-light">
        <i className="fas fa-plus text-info mr-2" /> Create Member
      </Link>
      <Link to="/keeper-calculator" className="btn btn-light">
        <i className="fas fa-plus text-info mr-2" /> Keeper Calculator
      </Link>
    </div>
  );
};

export default DashboardActions;
