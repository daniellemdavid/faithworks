import React from "react";
import styled from "styled-components";


import ChurchLogo from "/assets/low_res_black_logo.jpeg";
import PastorPhoto from "/assets/stock_pastor.jpg";

const LandingWrapper = styled.div`
  background-color:rgb(223, 202, 131, 0.4);
  background-color:rgb(0, 0, 0);
//   color: #F5F5DC;
color:black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
//   padding: 2rem;
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 3rem 0;
`;

const PastorImage = styled.img`
  border: 4px solid #D4AF37;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

const WelcomeText = styled.h1`
  font-size: 2.5rem;
  color: #D4AF37;
//   color:black;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  font-size: 1.125rem;
  max-width: 600px;
//   color:rgb(0, 0, 0);
color:white;
  
`;

const MapLink = styled.a`
  margin-top: 2rem;
  font-weight: bold;
  color:rgb(201, 160, 25);
  border: 2px solid #D4AF37;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  
  &:hover {
    background-color: #D4AF37;
    color: #000;
  }
`;

const LandingPage = () => (
  <LandingWrapper>
    

    <Hero>
      <PastorImage src={ChurchLogo} alt="Our Pastor" />
      <WelcomeText className={'michroma-regular'}>Welcome to Faith Works</WelcomeText>
      <SubText>
        Join us every Sunday at 1:00 PM as we gather to worship,
        learn, and grow together in faith.
      </SubText>
      <MapLink href="https://maps.app.goo.gl/tgntLQm3EhqnDjSx6" target="_blank" rel="noopener noreferrer">
        Get Directions
      </MapLink>
    </Hero>
    {/* <div style={{height: '50vh', width: '98%', backgroundColor: '#D4AF37', opacity: '.7', borderRadius: '5px'}}>something</div> */}
  </LandingWrapper>
);

export default LandingPage;