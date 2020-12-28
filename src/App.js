import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

// routes
import Routes from './Routes';
// mui themes
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
