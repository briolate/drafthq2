import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createMember } from '../../actions/member';

const CreateMember = ({ createMember, history }) => {
  const [formData, setFormData] = useState({
    memberTeamName: '',
    memberSeasons: '',
    memberPlayoffs: '',
    memberChampionships: '',
    memberLastPlaces: ''
  });

  const {
    memberTeamName,
    memberSeasons,
    memberPlayoffs,
    memberChampionships,
    memberLastPlaces
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createMember(formData, history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user" /> Let's get some information about your
        squad
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Team Name"
            name="memberTeamName"
            value={memberTeamName}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Seasons"
            name="memberSeasons"
            value={memberSeasons}
            onChange={e => onChange(e)}
          />
        </div>
        <small className="form-text">
          Enter at least one season this member has competed in
        </small>
        <div className="form-group">
          <input
            type="text"
            placeholder="Playoffs"
            name="memberPlayoffs"
            value={memberPlayoffs}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Championships"
            name="memberChampionships"
            value={memberChampionships}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Last Places"
            name="memberLastPlaces"
            value={memberLastPlaces}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link to="/dashboard" className="btn btn-light my-1" href="dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateMember.propTypes = {
  createMember: PropTypes.func.isRequired
};

export default connect(
  null,
  { createMember }
)(withRouter(CreateMember));
