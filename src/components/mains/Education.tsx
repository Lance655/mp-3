import usePageTitle from "../../custom-hooks/usePageTitle.ts";
import { StyledMainContentCommon } from "../common-styles/StyledMainContentCommon.tsx";
import { StyledMainLICommon } from "../common-styles/StyledMainLICommon.tsx";
import { StyledMainListsCommon } from "../common-styles/StyledMainListsCommon.tsx";
import { StyledH2Common } from "../common-styles/StyledH2Common.tsx";
import { StyledH3Common } from "../common-styles/StyledH3Common.tsx";


export function Education() {
    usePageTitle();

    return(

        <StyledMainContentCommon>
            <div className="education-wrapper">
                <StyledH2Common>Education</StyledH2Common>
            </div>

            {/*First section*/}
            <StyledH3Common>Degrees</StyledH3Common>

            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon>
                        <strong>Boston University</strong>
                        <p>Bachelor of Science in Computer Science (Expected 2025)</p>
                        <p><em>Honors:</em> Dean’s List (2022-2024)</p>
                        <p><em>Activities:</em> Member of the BU Hackathon Team</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>Long Island High School</strong>
                        <p>High School Diploma (Graduated 2021)</p>
                        <p><em>Honors:</em> National Honor Society, Valedictorian</p>
                    </StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>

            {/*Second section*/}
            <StyledH3Common>Relevant Coursework</StyledH3Common>

            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon>Data Structures and Algorithms</StyledMainLICommon>
                    <StyledMainLICommon>Operating Systems</StyledMainLICommon>
                    <StyledMainLICommon>Web Development and User Experience</StyledMainLICommon>
                    <StyledMainLICommon>Introduction to Artificial Intelligence</StyledMainLICommon>
                    <StyledMainLICommon>Software Engineering Principles</StyledMainLICommon>
                    <StyledMainLICommon>Machine Learning Fundamentals</StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>

            {/*Third section*/}
            <StyledH3Common>Extracurricular Activities</StyledH3Common>

            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon><strong>BU Hackathon Team:</strong> Competed in HackMIT, HackBU, and other hackathons, developing real-world applications in 48-hour coding challenges.</StyledMainLICommon>
                    <StyledMainLICommon><strong>Tech for Social Good:</strong> Led a project that developed a solution for visually impaired individuals.</StyledMainLICommon>
                    <StyledMainLICommon><strong>AI & Robotics Club:</strong> Worked on reinforcement learning models.</StyledMainLICommon>
                    <StyledMainLICommon><strong>Open Source Contributor:</strong> Contributed bug fixes and documentation improvements to TensorFlow.</StyledMainLICommon>
                    <StyledMainLICommon><strong>Cooking Club:</strong> Learned how to cook several dishes including macaroni and cheese.</StyledMainLICommon>
                    <StyledMainLICommon><strong>Chess Club:</strong> Competed in several chess games and hosted several tournaments. </StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>


        </StyledMainContentCommon>
    )
}