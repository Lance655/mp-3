import styled from 'styled-components';
import usePageTitle from "../../custom-hooks/usePageTitle.ts";
// import { StyledMainContentCommon } from "../common-styles/StyledMainContentCommon.tsx";
import { StyledH2Common } from "../common-styles/StyledH2Common.tsx";
import { StyledH3Common } from "../common-styles/StyledH3Common.tsx";

const StyledMainContentHome = styled.main`
    background-color: #eeeeee;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    padding-top: 2%;
    width: 70%;

    @media screen and (max-width: 750px) {
        width: 100%;
        height: 100vh;
    }
`;

const StyledSectionTitle = styled.div`
    padding: 5%;
`;

const StyledImage = styled.img`
    margin: 0;
    padding: 0 3%;
    padding-bottom: 3%;

    @media screen and (max-width: 750px) {
        display: block;
        //margin: 0 auto;
        width: 50%;
        margin: 1vh auto;
`;

// const StyledMain = styled.main`
//     background-color: #eeeeee;
//     padding-left: 5%;
//     padding-right: 5%;
//     padding-bottom: 5%;
//     padding-top: 2%;
//     width: 70%;
//
//     @media screen and (max-width: 750px) {
//         width: 100%;
//     }
// `;

export function Home() {

    usePageTitle();

    return (
        <StyledMainContentHome>
            <StyledSectionTitle>
                <StyledH2Common>Home</StyledH2Common>
            </StyledSectionTitle>

            <StyledImage src={`/IMG_4870.jpg`} alt={`Me smiling at the camera with groot on my shoulder`} width={`300`} />
            <p>My name is Lance Sinson. I am a student studying Computer Science at
                Boston University. I'm excited to share my journey, experiences, and accomplishments with
                you through my online resume. Feel free to explore!</p>

            <StyledH3Common>Fun Facts</StyledH3Common>
            <ul>
                <li>I’ve been to over 10 national parks and love hiking.</li>
                <li>My favorite movie is Wicked.</li>
                <li>I’m a huge fan of puzzle games like Sudoku and Wordle!</li>
            </ul>

            <StyledH3Common>Current Focus</StyledH3Common>
            <p>Right now, I’m diving deeper into web development and building interactive web applications. I’m also
                exploring machine learning to understand how AI models make decisions.</p>

        </StyledMainContentHome>
        );
}