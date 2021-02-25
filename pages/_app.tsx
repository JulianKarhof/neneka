import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useEffect } from "react";
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
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
