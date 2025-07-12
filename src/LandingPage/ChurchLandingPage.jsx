import React from "react";
import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";

import ChurchLogo from "../../public/assets/low_res_black_logo.jpeg";
import PastorPhoto from "../../public/assets/stock_pastor.jpg";

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

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #D4AF37;
  background-color: white;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 70px;
  margin: 1%;
  border-radius: 50%;
  @media only screen and (max-width: 600px) {
    display:none;
  }
`;

const Location = styled.div`
display: flex;

gap:5px;
  font-size: 1rem;
  align-items: center;
  a {
    color: #D4AF37;
    
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
    &>span{
    display: flex;
    gap: 5px;
    align-items: center;
    }
    @media only screen and (max-width: 600px) {
    font-size: .8rem;
    flex-direction:column;
    
  }
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
    <Header>
      
      <Location>
      <span><CiLocationOn />1100 Eastway Dr., Charlotte, NC 28205 &nbsp;</span>
        <a href="https://maps.app.goo.gl/tgntLQm3EhqnDjSx6" target="_blank" rel="noopener noreferrer">
          {' View on Google Maps'}
        </a>
      </Location>
      <Logo src={ChurchLogo} alt="Church Logo" />
    </Header>

    <Hero>
      <PastorImage src={ChurchLogo} alt="Our Pastor" />
      <WelcomeText className={'michroma-regular'}>Welcome to Faith Works</WelcomeText>
      <SubText>
        Join us every Sunday at 10:00 AM as we gather to worship,
        learn, and grow together in faith.
      </SubText>
      <MapLink href="https://maps.app.goo.gl/tgntLQm3EhqnDjSx6" target="_blank" rel="noopener noreferrer">
        Get Directions
      </MapLink>
    </Hero>
  </LandingWrapper>
);

export default LandingPage;