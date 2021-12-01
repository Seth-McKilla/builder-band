import { useContext } from "react";
import Context from "../../../../context";
import DarkModeToggle from "react-dark-mode-toggle";

const ToggleDarkMode = () => {
  const { mode, toggleMode } = useContext(Context);

  return (
    <DarkModeToggle
      onChange={() => toggleMode()}
      checked={mode === "dark"}
      size={80}
    />
  );
};

export default ToggleDarkMode;
