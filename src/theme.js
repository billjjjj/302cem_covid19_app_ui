import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Noto Sans TC"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ],
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      light: '#ff9563',
      main: '#ec6436',
      dark: '#b33307',
      contrastText: '#fff',
      danger: '#DC3545',
    },
    secondary: {
      light: '#4dabf5',
      main: '#4CB3E6', // bootstrap info
      dark: '#1769aa',
      contrastText: '#000',
    },
  },
});

export default Theme;
