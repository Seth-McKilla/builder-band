import { createTheme } from "@mui/material/styles";

export default createTheme({
  typography: {
    fontFamily: ["Libre Baskerville", "serif"].join(","),
  },
  palette: {
    primary: {
      main: "#0F4C75",
    },
    secondary: {
      main: "#FDCB9E",
    },
    info: {
      main: "#00B7C2",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      html,
      body {
        padding: 0;
        margin: 0;
      }  
      a {
        color: inherit;
        text-decoration: none;
      }
      * {
        box-sizing: border-box;
      }
      ::-webkit-scrollbar {
        width: 16px;
      }
      ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
        background-color: #fff;
      }
      `,
    },
  },
});
