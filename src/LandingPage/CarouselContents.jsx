import { Carousel } from "antd";
import styled from "styled-components";

import ChurchLogo from "/assets/low_res_black_logo.jpeg";

const LandingWrapper = styled.div`
  background-color: rgb(0, 0, 0);
  color: black;
  height: 100vh;
  align-items: center;
`;

const Hero = styled.section`
  display: flex !important;
  flex-direction: column;
  align-content: center;
  height:max(600px,80vh);
  // background: 100%/100% 150% no-repeat url('/assets/handhigh1.jpg') ;
  text-align: center;
  padding: 3rem;
  position: relative;
  z-index: 2;

  > * {
    margin: auto;
    display: block;

  }
  ::before {
    content: "";
    position: absolute;
    inset: 0;
    background: center/cover no-repeat url("/assets/handhigh1.jpg");
    z-index: -5;
  }
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: -4;
  }
`;

const PastorImage = styled.img`
  border: 4px solid #d4af37;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

const WelcomeText = styled.h1`
  font-size: 2.5rem;
  color: #d4af37;
  margin-bottom: 0rem;
  line-height: 3rem;
  >*{
  line-height: 1rem;
  margin-top: 5px;
  }
`;

const SubText = styled.p`
  font-size: 1.125rem;
  max-width: 600px;
  color: white;
`;

const MapLink = styled.a`
  margin-top: 2rem;
  font-weight: bold;
  color: rgb(201, 160, 25);
  border: 2px solid #d4af37;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: #d4af37;
    color: #000;
  }
`;

const CarouselWContents = () => (
  <LandingWrapper>
    <Carousel autoplay>
      <Hero>
        <PastorImage src={ChurchLogo} alt="Our Pastor" />
        <WelcomeText className={"michroma-regular"}>
          FAITH WORKS
          <span style={{display:'block', fontSize: '.7rem'}}>POWER AND DELIVERANCE CHRISTIAN MINISTRIES</span>
        </WelcomeText>
        <SubText>
          Join us every Sunday at 1:00 PM as we gather to worship, learn, and
          grow together in faith.
        </SubText>
        <div>
          <MapLink
            href="https://maps.app.goo.gl/tgntLQm3EhqnDjSx6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </MapLink>
        </div>
      </Hero>
      {/* <div
        style={{
          // height: "50vh",
          backgroundColor: "#D4AF37",
          // opacity: ".7",
          // borderRadius: "5px",
        }}
      >
        something
      </div>
      <div
        style={{
          // height: "50vh",
          backgroundColor: "#D4AF37",
          // opacity: ".7",
          // borderRadius: "5px",
        }}
      >
        something
      </div> */}
    </Carousel>
    {/* <div style={{height: '50vh', width: '98%', backgroundColor: '#D4AF37', opacity: '.7', borderRadius: '5px', margin: 'auto'}}>something</div> */}
  </LandingWrapper>
);

export default CarouselWContents;
