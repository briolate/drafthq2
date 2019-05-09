import React from 'react';
import PropTypes from 'prop-types';

const MemberDrafts = ({ member: { memberDrafts } }) => {
  const draftTable = memberDrafts.map(draft => (
    <tr key={draft._id}>
      <td>{draft.year}</td>
      <td className="hide-sm">{draft.qb}</td>
      <td className="hide-sm">{draft.rb1}</td>
      <td className="hide-sm">{draft.rb2}</td>
      <td className="hide-sm">{draft.rb3}</td>
      <td className="hide-sm">{draft.wr1}</td>
      <td className="hide-sm">{draft.wr2}</td>
      <td className="hide-sm">{draft.wr3}</td>
      <td className="hide-sm">{draft.te}</td>
      <td className="hide-sm">{draft.dst}</td>
      <td className="hide-sm">{draft.k}</td>
    </tr>
  ));

  return (
    <div className="profile-drafts bg-primary p-2">
      <h1 className="large">Drafts</h1>
      <table className="table">
        <thead>
          <tr className="text-primary">
            <th>Year</th>
            <th className="hide-sm">QB</th>
            <th className="hide-sm">RB1</th>
            <th className="hide-sm">RB2</th>
            <th className="hide-sm">RB3</th>
            <th className="hide-sm">WR1</th>
            <th className="hide-sm">WR2</th>
            <th className="hide-sm">WR3</th>
            <th className="hide-sm">TE</th>
            <th className="hide-sm">DS/T</th>
            <th className="hide-sm">K</th>
          </tr>
        </thead>
        <tbody>{draftTable}</tbody>
      </table>
    </div>
  );
};

MemberDrafts.propTypes = {
  member: PropTypes.object.isRequired
};

export default MemberDrafts;
