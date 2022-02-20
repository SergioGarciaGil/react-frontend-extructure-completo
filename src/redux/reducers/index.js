import { GET_USERS } from "../actions";
const initialState = {
  users: [],
  userDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    default:
      return state;
  }
}

export default rootReducer;
