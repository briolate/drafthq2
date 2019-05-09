import {
  GET_MEMBER,
  MEMBER_ERROR,
  CLEAR_MEMBER,
  UPDATE_MEMBER,
  GET_MEMBERS
} from '../actions/types';

const initialState = {
  member: null,
  members: [],
  memberDrafts: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MEMBER:
    case UPDATE_MEMBER:
      return {
        ...state,
        member: payload,
        loading: false
      };
    case GET_MEMBERS:
      return {
        ...state,
        members: payload,
        loading: false
      };
    case MEMBER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_MEMBER:
      return {
        ...state,
        member: null,
        memberDrafts: [],
        loading: false
      };
    default:
      return state;
  }
}
