import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import React from "react";
export const ThemeContext = React.createContext();

function App() {
  const [themeDark, setThemeDark] = useState(true)

  return (
    <div className="App">
      <ThemeContext.Provider value = {[themeDark,setThemeDark]}>
      <Navbar/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
