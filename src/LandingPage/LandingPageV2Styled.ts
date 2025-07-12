import styled from "styled-components";

export const LandingPageStyled = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  background-color: ${(props) => props.theme.neutralLight};
  color: ${(props) => props.theme.color};
`;
export const HeaderStyled = styled.h1`
  font-size: 15rem;
  text-align: center;
`;

