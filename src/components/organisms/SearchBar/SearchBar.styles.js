import styled from "styled-components";

export const StatusInfo = styled.div`
   color: ${({theme}) => theme.colors.darkGrey};
   font-size: ${({theme}) => theme.fontSize.l};
   margin-right: 40px;

   p{
       margin: 5px;
   }
`;

export const SearchBarWrapper = styled.div`
    grid-row: 1/1;
    grid-column: 2/3;
    border-bottom: 1px solid ${({theme}) => theme.colors.darkPurple};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 40px;


`;
