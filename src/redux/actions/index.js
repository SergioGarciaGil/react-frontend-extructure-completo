export const GET_USERS = "GET_USERS";

export function getUsers() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        dispatch({ type: GET_USERS, payload: users });
      });
  };
}
