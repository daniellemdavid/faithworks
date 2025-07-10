import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { AppStyled } from "./AppStyled";
import LandingPage from "./LandingPage/LandingPage";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppStyled className="bg-white text-gray-800">
        
        
          <LandingPage toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
          {/* <FooterStyled className="">
            © {new Date().getFullYear()} Faith Works Church
          </FooterStyled> */}
        
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
