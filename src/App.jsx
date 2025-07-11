import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { AppStyled } from "./AppStyled";
import LandingPage from "./LandingPage/LandingPage";
import { darkTheme, lightTheme, blueGreenTheme, blackGoldTheme } from "./theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  return (
    <ThemeProvider theme={blackGoldTheme}>
      <AppStyled >
        
        
          <LandingPage toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
        
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
