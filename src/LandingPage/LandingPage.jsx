import React from "react";
import { LandingPageStyled, SplitOneStyled, SplitPageStyled, SplitTwoStyled, MapStyled } from "./LandingPageStyled";
const LandingPage = ({toggleTheme, isDarkMode}) => {
    return(
    <LandingPageStyled>
        {/* {isDarkMode? <MdLightMode onClick={() => toggleTheme()}/>: <CiLight onClick={() => toggleTheme()}/>} */}
        <SplitPageStyled >
            <SplitOneStyled className='landing'>
                <img src="/assets/low_res_black_logo.jpeg" alt="faith works logo" />
            </SplitOneStyled>
            <SplitTwoStyled>
                <h5>Please join us</h5>
                <h2 className='michroma-regular fs-huge mainH2'>Sunday <br/> Worship</h2>
                <h2 className='subH2 ballet-cursive'>Service</h2>
                <h5>Granger High School</h5>
                <h5>1100 Eastway Drive Charlotte, NC 28205</h5>
                <MapStyled><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6517.2024242722955!2d-80.782583!3d35.241296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fb95bb124ff%3A0x76da98e4294c513e!2sGaringer%20High%20School!5e0!3m2!1sen!2sus!4v1752303318592!5m2!1sen!2sus" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </MapStyled>
            </SplitTwoStyled>
        </SplitPageStyled>
    </LandingPageStyled>)
}
export default LandingPage
