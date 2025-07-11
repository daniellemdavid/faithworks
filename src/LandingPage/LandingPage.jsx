import React from "react";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { LandingPageStyled, SplitPageStyled, SplitOneStyled, SplitTwoStyled } from "./LandingPageStyled";
const LandingPage = ({toggleTheme, isDarkMode}) => {
    return(
    <LandingPageStyled>
        {/* {isDarkMode? <MdLightMode onClick={() => toggleTheme()}/>: <CiLight onClick={() => toggleTheme()}/>} */}
        
        
        <SplitPageStyled >

            <SplitOneStyled class='landing'>
                <h4 class='meddon-regular'>Welcome to</h4>
                <h2>Faith Works Church</h2>
            </SplitOneStyled>
            <SplitTwoStyled>
                <h5>Join us</h5>
                <h2>Sunday Service</h2>
                <h4>11am @ church location</h4>
            </SplitTwoStyled>
        </SplitPageStyled>
    </LandingPageStyled>)
}
export default LandingPage