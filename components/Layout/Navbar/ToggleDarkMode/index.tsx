import { useContext } from "react";
import Context from "../../../../context";
import DarkModeToggle from "react-dark-mode-toggle";

const ToggleDarkMode = () => {
  const { dark, setDark } = useContext(Context);

  return (
    <DarkModeToggle onChange={() => setDark(!dark)} checked={dark} size={80} />
  );
};

export default ToggleDarkMode;
