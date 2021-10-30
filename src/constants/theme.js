import { createTheme } from '@material-ui/core/styles';
import { neutralColor, primaryColor, secondaryColor } from './colors';
const theme = createTheme({
  palette: {
    primary: {
      main: secondaryColor,
      contrastText: "white"
    },
    text: {
        primary: neutralColor
    }
  },
});

export default theme