import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Context from "../context";
import Cookies from "js-cookie";
import theme from "../theme";

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

  type Mode = "light" | "dark";

  const initialMode: Mode = Cookies.get("mode") === "light" ? "light" : "dark";

  const [mode, setMode] = useState(initialMode);
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    return Cookies.set("mode", mode);
  };

  console.log(mode);

  return (
    <Context.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme(mode)}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
