import React from 'react';
import { SnackbarProvider } from 'notistack';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

// routes
import Routes from './Routes';
// mui themes
import theme from './theme';
// Global variable
window.siteSetting = {
  siteName: 'HK Covid-19 APP',
  copyRight: '© 302CEM The First Team',
  testApiUrl: 'http://localhost:5000',
  apiUrl: 'https://hk-covid19-app.herokuapp.com',
  dev: true,
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Router>
          <Routes />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
