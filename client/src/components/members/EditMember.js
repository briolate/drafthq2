// import React, { Fragment, useState, useEffect } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createMember, getCurrentMember } from '../../actions/member';

// const EditMember = ({
//   member: { member, loading },
//   createMember,
//   getCurrentMember,
//   history
// }) => {
//   const [formData, setFormData] = useState({
//     memberTeamName: '',
//     memberSeasons: '',
//     memberPlayoffs: '',
//     memberChampionships: '',
//     memberLastPlaces: ''
//   });

//   useEffect(() => {
//     getCurrentMember();

//     setFormData({
//       memberTeamName:
//         loading || !member.memberTeamName ? '' : member.memberTeamName,
//       memberSeasons:
//         loading || !member.memberSeasons ? '' : member.seasons.join(', '),
//       memberPlayoffs:
//         loading || !member.memberPlayoffs
//           ? ''
//           : member.memberPlayoffs.join(', '),
//       memberChampionships:
//         loading || !member.memberChampionships
//           ? ''
//           : member.memberChampionships.join(', '),
//       memberLastPlaces:
//         loading || !member.memberLastPlaces
//           ? ''
//           : member.memberLastPlaces.join(', ')
//     });
//   }, [loading, getCurrentMember]);

//   const {
//     memberTeamName,
//     memberSeasons,
//     memberPlayoffs,
//     memberChampionships,
//     memberLastPlaces
//   } = formData;

//   const onChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = e => {
//     e.preventDefault();
//     createMember(formData, history);
//   };

//   return (
//     <Fragment>
//       <h1 className="large text-primary">Create Your Profile</h1>
//       <p className="lead">
//         <i className="fas fa-user" /> Let's get some information about your
//         squad
//       </p>
//       <small>* = required field</small>
//       <form className="form" onSubmit={e => onSubmit(e)}>
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="* Team Name"
//             name="memberTeamName"
//             value={memberTeamName}
//             onChange={e => onChange(e)}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="* Seasons"
//             name="memberSeasons"
//             value={memberSeasons}
//             onChange={e => onChange(e)}
//           />
//         </div>
//         <small className="form-text">
//           Enter at least one season this member has competed in
//         </small>
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Playoffs"
//             name="memberPlayoffs"
//             value={memberPlayoffs}
//             onChange={e => onChange(e)}
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Championships"
//             name="championships"
//             value={memberChampionships}
//             onChange={e => onChange(e)}
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Last Places"
//             name="memberLastPlaces"
//             value={memberLastPlaces}
//             onChange={e => onChange(e)}
//           />
//         </div>
//         <input type="submit" className="btn btn-primary my-1" />
//         <Link to="/dashboard" className="btn btn-light my-1" href="dashboard">
//           Go Back
//         </Link>
//       </form>
//     </Fragment>
//   );
// };

// EditMember.propTypes = {
//   createMember: PropTypes.func.isRequired,
//   getCurrentMember: PropTypes.func.isRequired,
//   member: PropTypes.object.isRequired
// };

// export default connect(
//   null,
//   { createMember }
// )(withRouter(EditMember));
