import React from "react";
import { LandingPageStyled, HeaderStyled } from "./LandingPageV2Styled";
const LandingPage = () => {
  return (
    <LandingPageStyled>
      <img
        styles={{ width: "100px", height: "100px" }}
        src="/assets/low_res_black_logo.jpeg"
        alt="faith works logo"
      />
      <HeaderStyled>Faith Works</HeaderStyled>
      <div>
        <h5>Please join us</h5>
        <h2 className="michroma-regular fs-huge mainH2">
          Sunday <br /> Worship
        </h2>
        <h2 className="subH2 ballet-cursive">Service</h2>
        <h5>Granger High School</h5>
        <h5>1100 Eastway Drive Charlotte, NC 28205</h5>
      </div>
    </LandingPageStyled>
  );
};
export default LandingPage;
