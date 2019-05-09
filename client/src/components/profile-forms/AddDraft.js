import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDraft } from '../../actions/profile';

const AddDraft = ({ addDraft, history }) => {
  const [formData, setFormData] = useState({
    year: '',
    qb: '',
    rb1: '',
    rb2: '',
    rb3: '',
    wr1: '',
    wr2: '',
    wr3: '',
    te: '',
    dst: '',
    k: ''
  });

  const { year, qb, rb1, rb2, rb3, wr1, wr2, wr3, te, dst, k } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add A Draft</h1>
      <p className="lead">
        <i className="fas fa-list-ol" /> Add the round in which you drafted each
        position. This information will be used to track your drafting
        tendencies.
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addDraft(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Year"
            name="year"
            value={year}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* QB"
            name="qb"
            value={qb}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* RB1"
            name="rb1"
            value={rb1}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* RB2"
            name="rb2"
            value={rb2}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="RB3"
            name="rb3"
            value={rb3}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* WR1"
            name="wr1"
            value={wr1}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* WR2"
            name="wr2"
            value={wr2}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="WR3"
            name="wr3"
            value={wr3}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* TE"
            name="te"
            value={te}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* D/ST"
            name="dst"
            value={dst}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* K"
            name="k"
            value={k}
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

AddDraft.propTypes = {
  addDraft: PropTypes.func.isRequired
};

export default connect(
  null,
  { addDraft }
)(withRouter(AddDraft));
