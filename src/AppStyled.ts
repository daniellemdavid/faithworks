import styled from "styled-components";

export const AppStyled = styled.div`
    height: 100vh;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
`

export const FooterStyled = styled.footer`
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
`