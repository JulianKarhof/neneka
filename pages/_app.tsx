import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "../styles/globals.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5dadec",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
