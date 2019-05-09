import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_MEMBER,
  MEMBER_ERROR,
  CLEAR_MEMBER,
  // UPDATE_MEMBER,
  GET_MEMBERS
} from './types';

// Create or update a member
export const createMember = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/api/member', formData, config);

    dispatch({
      type: GET_MEMBER,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Member Updated' : 'Member Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: MEMBER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Get current user's members
export const getMembers = userId => async dispatch => {
  dispatch({ type: CLEAR_MEMBER });

  try {
    const res = await axios.get(`/api/member/${userId}`);

    dispatch({
      type: GET_MEMBERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MEMBER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// Get member by ID
export const getMemberById = memberId => async dispatch => {
  try {
    const res = await axios.get(`/api/member/view-member/${memberId}`);

    dispatch({
      type: GET_MEMBER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MEMBER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
