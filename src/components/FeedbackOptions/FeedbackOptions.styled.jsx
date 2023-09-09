import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
gap: 20px;
`;

export const Button = styled.button `
    margin-top:40px;
    text-transform: capitalize;
    width: 80px;
    padding: 4px;
    font-size: 16px;
    background-color: white-blue;
    &:hover {
        background-color: blue;
    }
`;