import { ThemeProvider, createTheme } from '@mui/material';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#EDEDED",
      main: "#0CA983",
      contrastText: "#FFF",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#EDEDED",
      main: "#0CA983",
      contrastText: "#FFF",
    },
  },
});

const Theme = ({children}) => {
    const { isDarkTheme } = useContext(GlobalContext);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  )
}

export default Theme