import { GET_DETAIL, GET_USERS } from "../actions";
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
    case GET_DETAIL:
      let user = state.users.filter(
        (u) => u.id === parseInt(action.payload.id)
      );
      return {
        ...state,
        userDetail: user[0],
      };
    default:
      return state;
  }
}

export default rootReducer;
