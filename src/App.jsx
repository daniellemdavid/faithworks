import { useState } from "react";

import { Link, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { AppStyled } from "./AppStyled";
// import LandingPage from "./LandingPage/LandingPage";
// import LandingPage from "./LandingPage/LandingPageV2";
import { CiLocationOn } from "react-icons/ci";
import LandingPage from "./LandingPage/ChurchLandingPage";
import { blackGoldTheme } from "./theme";
import ChurchLogo from "/assets/low_res_black_logo.jpeg";
import { IoTimeOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  return (
    <ThemeProvider theme={blackGoldTheme}>
      <AppStyled>
        <Header>
          <Location>
            <span>
              <CiLocationOn color="black"/>{"   "}
              <p>Garanger Auditorium, 1100 Eastway Dr., Charlotte, NC 28205 &nbsp;</p>
              
              <a
                href="https://maps.app.goo.gl/tgntLQm3EhqnDjSx6"
                target="_blank"
                rel="noopener noreferrer"
                className="mapLink"
              >
                {"Maps"}
              </a>
              <span style={{marginRight:'10px'}}><IoTimeOutline color="black"/> 1:00PM</span>
            </span>
            <nav style={{}}>
              <Link to="/">Home</Link>
              <Link to="/">Gallery</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Donations</Link>

              <Link to="/">Home</Link>
              {/* <Link to="/about">About</Link> */}
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
  @media only screen and (max-width: 600px) {
  }
`;
const Hamburger = styled.span`
@media only screen and (min-width: 600px) {
    display: none;
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
    color: #d4af37;
    color: gray;
    text-decoration: none;
    border-radius: 20px;
    padding: 0px 5px;
    background-color:rgb(239, 232, 209);
    &:hover {
      color: black;
    }
  }
  span {
    display: flex;
    gap: 2px;
    align-items: center;
  }
  nav {
    display: flex;
    justify-content: space-around;
    >*{
      gap: 1px;
      padding: 0px 5px;
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    flex-direction: column;
    display: none;
  }
`;

export default App;
