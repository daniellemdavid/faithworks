import React from "react";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { LandingPageStyled } from "./LandingPageStyled";
const LandingPage = ({toggleTheme, isDarkMode}) => {
    return(
    <LandingPageStyled>
        {isDarkMode? <MdLightMode onClick={() => toggleTheme()}/>: <CiLight onClick={() => toggleTheme()}/>}
        <header>Hi there! Welcome to Faith works</header>
        
        
    </LandingPageStyled>)
}
export default LandingPage