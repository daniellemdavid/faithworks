import styled from "styled-components";

export const LandingPageStyled = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  background-color: ${(props) => props.theme.neutralLight};
  color: ${(props) => props.theme.color};
`;
export const SplitPageStyled = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.neutralLight};
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 40% 60%;
    gap: 0;
  }
`;
export const SplitOneStyled = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  align-content: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  > img {
    object-fit: cover;
  }
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

  position: relative;
  @media only screen and (max-width: 1024px) {
    > img {
      margin: -23% 0;
    }
  }
`;
export const SplitTwoStyled = styled.div`
  background-color: ${(props) => props.theme.neutralLight};
  color: ${(props) => props.theme.neutralDark};
  margin: auto;
  justify-content: center;
  width: 100%;

  > h2,
  h4,
  h5 {
    justify-self: center;
  }
  > h2.mainH2 {
    font-size: 5rem;
    font-weight: 700;
    // line-height: 75px;
    position: relative;
    margin: 0;
    &::before {
      content: "11am";
      font-size: 3rem;
      position: absolute;
      top: -1%;
      right: -28%;
      width: 32%;
      background: white;
      align-content: center;
      text-align: center;
      justify-content: center;
      border-radius: 10px;
      padding: 0 1px;
      border: 2px solid gold;
    }
  }
  > h2.subH2 {
    font-weight: 400;
    font-size: 14rem;
    line-height: 4rem;
    color: beige;
    padding-bottom: 20px;
  }
  > h4 {
    font-size: 2rem;
  }
  > h5 {
    text-align: center;
    color: black;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 1024px) {
    > h2.mainH2 {
      font-size: 2rem;
      font-weight: 700;
      position: relative;
      &::before {
        content: "11am";
        font-size: 1rem;
        position: absolute;
        top: -2%;
        right: -25%;
        height: fit-content;
        background: white;
        text-align: center;
        padding: 0 0;

        border-radius: 12px;
      }
    }
    > h2.subH2 {
      font-weight: 400;
      font-size: 8rem;
      color: beige;
      padding-bottom: 20px;
    }
    > h4 {
      font-size: 1rem;
    }
    > h5 {
      font-size: 1rem;
    }
  }
`;
export const MapStyled = styled.div`
   display: flex;
  justify-content: center; 
  align-items: center;  
  height: 100%;
`;
