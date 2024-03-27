import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const googleScriptRun = () => {
  return Object.keys(google.script.run).reduce((gs, k) => {
    gs[k] = (...args) => {
      return new Promise((resolve, reject) => {
        google.script.run
          .withSuccessHandler(resolve)
          .withFailureHandler(reject)
          [k].apply(google.script.run, args)
      })
    }
    return gs
  }, {})
}

const initialState = {
  isDarkTheme: false,
  user: {},
  userLoggedIn: false,
  loading: false,
  error: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const updateTheme = (isTheme) => {
    dispatch({
      type: "SWITCH_THEME",
      payload: isTheme
    })
  }

  const userLogin = (user, pass) =>  {
    dispatch({
      type: "LOADING",
    })
    dispatch({
      type: "USER_LOGIN",
      payload: {user, pass},
    });

    // googleScriptRun()
    //   .authenticateUserLogin(user, pass)
    //   .then((result) => {
    //     dispatch({
    //       type: "USER_LOGIN",
    //       payload: result,
    //     });
    //   })
    //   .catch((error) => {
    //     dispatch({
    //       type: "ERROR",
    //       payload: error,
    //     });
    //   });
  }

  
  return (
    <GlobalContext.Provider
      value={{
        isDarkTheme: state.isDarkTheme,
        user: state.user,
        userLoggedIn: state.userLoggedIn,
        loading: state.loading,
        error: state.error,
        updateTheme,
        userLogin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
