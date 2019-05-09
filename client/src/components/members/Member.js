import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import MemberTop from './MemberTop';
import MemberAbout from './MemberAbout';
import MemberDrafts from './MemberDrafts';
import { getMemberById } from '../../actions/member';

const Member = ({
  getMemberById,
  member: { member, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getMemberById(match.params.id);
  }, [getMemberById, match.params.id]);

  return (
    <Fragment>
      {member === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/members" className="btn btn-light">
            Back to Members
          </Link>
          <Link to="/edit-member" className="btn btn-dark">
            Edit Member
          </Link>
          <div className="profile-grid my-1">
            <MemberTop member={member} />
            <MemberAbout member={member} />
            {member.memberDrafts.length > 0 ? (
              <MemberDrafts member={member} />
            ) : (
              <div className="profile-drafts bg-primary p-2">
                <h2 className="text-center">No drafts added</h2>
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Member.propTypes = {
  getMemberById: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  member: state.member,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getMemberById }
)(Member);
