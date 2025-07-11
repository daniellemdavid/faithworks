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
  // background: ${(props) => props.theme.gradient_grey_black};
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
    // line-height: 1rem; 
  }
    position: relative;
    // &::before{
    //  content: '';             /* required! can be text, or empty for decorative */
    // position: absolute;      
    // top: 40vh;
    // left: 99.2%;
    // width: 12px;
    // height: 20vh;
    // background: lightgray;
    // border-radius: 2px;
    // }
    &::after{
    
    content: '';             /* required! can be text, or empty for decorative */
    position: absolute;      
    top: 0;
    left:0%;
    width: 100%;
    height: 100vh;
    
    border-radius: 2px;
    background: ${(props) => props.theme.logo};
    
    }
`;
export const SplitTwoStyled = styled.div`
  background-color: ${(props) => props.theme.neutralLight};
  color: ${(props) => props.theme.neutralDark};

  align-content: center;
  justify-content: center;
  > h2,
  h4,
  h5 {
    justify-self: center;
  }
  > h2.mainH2 {
    font-size: 5rem;
    font-weight: 700;
  line-height: 90px;
  position: relative;
  &::before{
     content: '11am';  
      font-size: 3rem;
    position: absolute;      
    top: -8%;
    right: -25%;
    width: 30%;
    height: 45%;
    background: white;
    align-content: center;
    text-align: center;
    justify-content: center;
    border-radius: 12px;
    }
  }
  >h2.subH2{
    // font-family: "Meddon", cursive;
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
  }
`;

