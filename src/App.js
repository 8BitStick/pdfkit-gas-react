import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Theme from './components/Theme';
import { GlobalProvider } from "./context/GlobalState";
import Home from './pages/Home';
import Login from './pages/Login';


const App = () => {
  return (
    <GlobalProvider>
      <Theme>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Theme>
    </GlobalProvider>
  );
}

export default App