export default (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      return {
        ...state,
        isDarkTheme: !action.payload,
      };
    case "USER_LOGIN":
      return {
        ...state,
        user: action.payload,
        userLoggedIn: true,
        error: false,
        loading: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ERROR":
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
