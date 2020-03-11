import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// import mapBG from "./img/map-bg.jpg";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(67, 82, 247)',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    overrides: {},
  },
});

export default theme;
