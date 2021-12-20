import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Context from "../context";
import { createTheme } from "@mui/material";
import { styleOverrides } from "../styles";

// Mui
import { ThemeProvider, CssBaseline } from "@mui/material";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const [dark, setDark] = useState(false);

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
    typography: {
      fontFamily: ["Lato", "san-serif"].join(","),
    },
    components: {
      MuiCssBaseline: { styleOverrides },
    },
  });

  return (
    <Context.Provider value={{ dark, setDark }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
