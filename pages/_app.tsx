import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Context from "../context";
import { createTheme } from "@mui/material";
import { styleOverrides } from "../styles";

// Mui
import { ThemeProvider, CssBaseline } from "@mui/material";

const App = ({ Component, pageProps }: AppProps) => {
  const getLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  };

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
      <Web3ReactProvider getLibrary={getLibrary}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Web3ReactProvider>
    </Context.Provider>
  );
};

export default App;
