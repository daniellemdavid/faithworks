import { useState } from "react";

import { Link, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { AppStyled } from "./AppStyled";
// import LandingPage from "./LandingPage/LandingPage";
// import LandingPage from "./LandingPage/LandingPageV2";
import { CiLocationOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import LandingPage from "./LandingPage/ChurchLandingPage";
import { blackGoldTheme } from "./theme";
import ChurchLogo from "/assets/low_res_black_logo.jpeg";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  return (
    <ThemeProvider theme={blackGoldTheme}>
      <AppStyled>
        <Header>
          <Location>
            <MeetingDetails className="meetDetails">
              <span>
              <CiLocationOn color="black"/>
              <a
                href="https://maps.app.goo.gl/tgntLQm3EhqnDjSx6"
                target="_blank"
                rel="noopener noreferrer"
                className="mapLink"
              >
                {"Garanger Auditorium, 1100 Eastway Dr., Charlotte, NC 28205"}
              </a>
              </span>
              <span><IoTimeOutline color="black"/> 1:00PM</span>
            </MeetingDetails>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/">Gallery</Link>
              <Link to="/">About Us</Link>
              <Link to="/about">Sermons</Link>
              <Link to="/" style={{border: '1px solid lightgray', borderRadius: '6px', backgroundColor: 'gray', padding: '0px 8px', color: 'gold'}}>Give</Link>
              
            </nav>
          </Location>
          <Hamburger><GiHamburgerMenu /></Hamburger>
          <Logo src={ChurchLogo} alt="Church Logo" />
        </Header>

        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* <Route path="/about" element={<About />} /> */}
          {/* Catch-all 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
}
const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 10%;
  padding: .3rem .7rem;
  border-bottom: 1px solid #d4af37;
  background-color: white;
  max-width: 1200px;
  margin: auto;
  @media only screen and (max-width: 600px) {
  }
`;
const Hamburger = styled.span`
@media only screen and (min-width: 600px) {
    display: none;
  }
`
const MeetingDetails = styled.span`
  display: flex;
  flex-direction:column;
  gap: 7px;
  color: gray;
  >span{
    display: flex;
    align-items: center;  
  }
`
const Logo = styled.img`
  height: 70px;
  margin: 1%;
  border-radius: 50%;
  justify-self:flex-end;
  
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const Location = styled.div`
  display: flex;
  font-size: 1rem;
  flex-direction: column;
  justify-content: space-between;
  a.mapLink {
    // color: #d4af37;
    color: gray;
    // text-decoration: none;
    border-radius: 20px;
    // background-color:rgb(239, 232, 209);
    &:hover {
      color: black;
    }
  }
  nav {
    display: flex;
    gap: 6%;
    
    >*{
      gap: 1px;
      color: gray;
      &:hover{
      color: #d4af37;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    flex-direction: column;
    display: none;
  }
`;

export default App;
