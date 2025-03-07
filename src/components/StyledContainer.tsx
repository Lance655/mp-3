import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-left: 1px solid black;
    border-right: 1px solid black;
    height: 100vh;
    height: 100%;
    
    @media screen and (max-width: 750px) {
        flex-direction: column;
        width: 100%;
        //height: 100vh;
        //height: 100%;
    }
`;
