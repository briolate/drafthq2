import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteDraft } from '../../actions/profile';

const Drafts = ({ drafts, deleteDraft }) => {
  const draftTable = drafts.map(draft => (
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
      <td>
        <button
          onClick={() => deleteDraft(draft._id)}
          className="btn btn-danger"
        >
          Delete draft
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Drafts</h2>
      <table className="table">
        <thead>
          <tr>
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
    </Fragment>
  );
};

Drafts.propTypes = {
  drafts: PropTypes.array.isRequired,
  deleteDraft: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteDraft }
)(Drafts);
