import styled from "styled-components";

export const Menu = styled.div `
width: unset;
padding: 50px;
display: flex;
flex-direction: column;
height: 100%;
position: absolute;
left: 0;
background-color: ${({theme}) => theme.colors.darkGrey};

.menuLink{
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    padding: 10px 0;
}
`;