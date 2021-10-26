import styled from 'styled-components';

export const Average = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;
