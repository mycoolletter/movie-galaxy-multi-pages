import React, { useState }from "react";
import "./toggle.css";

function Toggle() {
  const [toggle, setToggle] = useState(true);
  return (
    <div id="color-switcher" onClick={() => setToggle(!toggle)}>
      <div id={toggle ? "color-switcher-mover" : "color-switcher-moved"}></div>
    </div>
  );
}

export default Toggle;
