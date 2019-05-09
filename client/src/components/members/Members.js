import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import MemberItem from './MemberItem';
import { getMembers } from '../../actions/member';

const Members = ({ getMembers, member: { members, loading } }) => {
  useEffect(() => {
    getMembers();
  }, [getMembers]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Members</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Browse and connect with
            other users
          </p>
          <div className="profiles">
            {members.length > 0 ? (
              members.map(member => (
                <MemberItem key={member._id} member={member} />
              ))
            ) : (
              <h4>No members found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Members.propTypes = {
  getMembers: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  member: state.member
});

export default connect(
  mapStateToProps,
  { getMembers }
)(Members);
