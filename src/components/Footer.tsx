import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    background-color: maroon;
    color: white;
`;

const StyledP = styled.p`
    margin: 0;
    padding: 2%;
`;

const StyledLink = styled(Link)`
    color: white;
`;
export function Footer() {

    return (
        <StyledFooter>
            <StyledP>
                All Rights Reserved by Lance Sinson <StyledLink to={``}>Credits</StyledLink> &#169;
            </StyledP>
        </StyledFooter>
    );
}