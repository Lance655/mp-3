import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledNav = styled.nav`
    background-color: #c68f8f;
    border-right: 1px solid black;
    width: 30%;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const StyledUL = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    padding: 0;
    height: 100%;
    font-size: calc(2px + 2vw);
    text-align: center;
    justify-content: space-evenly;

    @media screen and (max-width: 750px) {
        flex-direction: row;
        width: 100%;
    }
`;

const StyledLI = styled.li`
    /*border-top: 1px solid black;*/
    width: 90%;
    padding: 2vh 0;   /* KEEP */
    background-color: maroon;
    margin: 5vh auto;  /* KEEP */

    @media screen and (max-width: 750px) {
        width: 100%;
        padding: 2%;
        margin: 0;
        border: 1px solid black;
        font-size: calc(2px + 1.5vw);
        }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;


export function Navigation() {
    return (
        <StyledNav>
            <StyledUL>
                <StyledLI>
                    <StyledLink to={`/`}> Home </StyledLink>
                </StyledLI>

                <StyledLI>
                    <StyledLink to={`/Education`}> Education </StyledLink>
                </StyledLI>

                <StyledLI>
                    <StyledLink to={`/Experiences`}> Experiences </StyledLink>
                </StyledLI>

                <StyledLI>
                    <StyledLink to={`/Certifications`}> Certifications </StyledLink>
                </StyledLI>

                <StyledLI>
                    <StyledLink to={`/Achievements`}> Achievements </StyledLink>
                </StyledLI>

                <StyledLI>
                    <StyledLink to={`/Projects`}>Projects </StyledLink>
                </StyledLI>

            </StyledUL>
        </StyledNav>
    );
}