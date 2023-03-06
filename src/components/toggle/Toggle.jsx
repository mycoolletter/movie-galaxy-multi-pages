import React, { useContext} from "react";
import "./toggle.css";
import { ThemeContext } from "../../App";

function Toggle() {
  const [toggle, setToggle] = useContext(ThemeContext);
  return (
    <div id="color-switcher" onClick={() => {setToggle(!toggle)
    }}>
      <div id={toggle ? "color-switcher-mover" : "color-switcher-moved"}></div>
    </div>
  );
}

export default Toggle;
