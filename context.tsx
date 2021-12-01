import { createContext } from "react";

type Context = {
  mode: "light" | "dark";
  toggleMode: () => void;
};

const Context = createContext({});

export default Context;
