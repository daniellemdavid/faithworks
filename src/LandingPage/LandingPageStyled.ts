import styled from "styled-components";

export const LandingPageStyled = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.neutralLight};
  color: ${(props) => props.theme.color};
`;
export const SplitPageStyled = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  height: 100vh;
  max-height: 2000px;
  background-color: ${(props) => props.theme.neutralLight};
`;
export const SplitOneStyled = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  align-content: center;
  justify-content: center;
  > h2,
  h4 {
    padding-left: 10%;
  }
  > h2 {
    font-size: 4rem;
  }
  > h4 {
    font-size: 2rem;
  }
`;
export const SplitTwoStyled = styled.div`
  background-color: ${(props) => props.theme.neutralLight};
  color: ${(props) => props.theme.background};

  align-content: center;
  justify-content: center;
  > h2,
  h4,
  h5 {
    justify-self: center;
  }
  > h2 {
    font-size: 3rem;
  }
  > h4 {
    font-size: 2rem;
  }
  > h5 {
  }
`;

