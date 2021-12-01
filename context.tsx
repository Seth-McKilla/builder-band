import { createContext } from "react";

type ThemeContext = boolean;

const appCtxDefaultValue = {
  dark: false,
  setDark: (state: ThemeContext) => {},
};

const Context = createContext(appCtxDefaultValue);

export default Context;
