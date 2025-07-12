import styled from "styled-components";

export const AppStyled = styled.div`
    min-height: 100vh;
    background-color: ${(props) => props.theme.neutralLight};
    background-color: white;
    color: ${(props) => props.theme.color};
      margin: auto;
`

export const FooterStyled = styled.footer`
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
`