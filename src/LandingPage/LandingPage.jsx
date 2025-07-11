import React from "react";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { LandingPageStyled, SplitPageStyled, SplitOneStyled, SplitTwoStyled } from "./LandingPageStyled";
const LandingPage = ({toggleTheme, isDarkMode}) => {
    return(
    <LandingPageStyled>
        {/* {isDarkMode? <MdLightMode onClick={() => toggleTheme()}/>: <CiLight onClick={() => toggleTheme()}/>} */}
        
        
        <SplitPageStyled >

            <SplitOneStyled className='landing'>
                <h4 className='meddon-regular'>Welcome to</h4>
                <h2>Faith Works Church</h2>
            </SplitOneStyled>
            <SplitTwoStyled>
                <h5>Please join us</h5>
                <h2 className='michroma-regular fs-huge mainH2'>Sunday <br/> Worship</h2>
                <h2 className='subH2 ballet-cursive'>Service</h2>
                <h5>Granger High School</h5>
                <h5>1100 Eastway Drive Charlotte, NC 28205</h5>
            </SplitTwoStyled>
        </SplitPageStyled>
    </LandingPageStyled>)
}
export default LandingPage