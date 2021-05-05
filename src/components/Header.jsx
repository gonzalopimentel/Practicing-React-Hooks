import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/index.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    theme === "lightmode" ? setTheme("darkmode") : setTheme("lightmode");
  };

  return (
    <div>
      <h1>ReactHooks</h1>
      <button className="toogle-button" type="button" onClick={handleClick}>
        {darkMode ? "DarkMode" : "LightMode"}
      </button>
    </div>
  );
};

export default Header;
