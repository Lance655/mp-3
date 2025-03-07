import styled from 'styled-components';

const StyledHeader = styled.header`
    text-align: left;
    background-color: maroon;
    padding: 2%;
    color: white;
    
    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;


export function Header() {
    return (
        <StyledHeader>
            <h1>Lance Sinson</h1>
            <p>My Online Resume</p>
        </StyledHeader>
    );
}