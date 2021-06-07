export default function authReducer(state = "", action) {
  switch (action.type) {
    case "AUTHORIZE":
      return action.token;

    case "LOGOUT":
      return "";

    default:
      return state;
  }
}
