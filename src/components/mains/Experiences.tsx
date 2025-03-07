import styled from "styled-components";
import usePageTitle from "../../custom-hooks/usePageTitle.ts";
import { StyledMainContentCommon } from "../common-styles/StyledMainContentCommon.tsx";
import { StyledMainListsCommon } from "../common-styles/StyledMainListsCommon.tsx";
import { StyledMainLICommon } from "../common-styles/StyledMainLICommon.tsx";
import { StyledH2Common } from "../common-styles/StyledH2Common.tsx";
import { StyledH3Common } from "../common-styles/StyledH3Common.tsx";


const StyledH4 = styled.h4`
    color: maroon;
`;

export function Experiences() {
    usePageTitle();

    return (
        <StyledMainContentCommon>
            <div className="experiences-wrapper">
                <StyledH2Common>Professional Experiences</StyledH2Common>
            </div>

            <StyledH3Common>Internships</StyledH3Common>

            {/*first internship*/}
            <StyledH4><strong>Software Development Intern</strong> - <em>NASA</em> (Summer 2024)</StyledH4>
            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon>Developed a web application to manage client data, increasing data processing efficiency by
                        250%.
                    </StyledMainLICommon>
                    <StyledMainLICommon>Collaborated on the Apollo 11 project and developed the rocket boosters that sent mankind to
                        space.
                    </StyledMainLICommon>
                    <StyledMainLICommon>Tools Used: JavaScript, React, Node.js</StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>

            {/*second internship*/}
            <StyledH4><strong>Machine Learning Intern</strong> - <em>AI Labs</em> (Fall 2023)</StyledH4>
            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon>Built a Python pipeline to clean and preprocess large datasets.</StyledMainLICommon>
                    <StyledMainLICommon>Trained and evaluated models achieving a 92% accuracy rate.</StyledMainLICommon>
                    <StyledMainLICommon>Presented findings to stakeholders during weekly updates.</StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>


            {/*third internship*/}
            <StyledH4><strong>Databases Intern</strong> - <em>Disney</em> (Summer 2022)</StyledH4>
            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon>Worked on the Tower of Terror ride and implemented the fiber optic cables.</StyledMainLICommon>
                    <StyledMainLICommon>Designed the disney wristband using a centralized database.</StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>

            {/*fourth internship*/}
            <StyledH4><strong>Cybersecurity Intern</strong> - <em>Central Intelligence Agency</em> (Summer 2019)</StyledH4>
            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon>Hacked into the matrix mainframe and implanted a malicious malware.</StyledMainLICommon>
                    <StyledMainLICommon>Detected a hidden virus that infected 50% of the population and destroyed it.</StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>

            <StyledH3Common>Part-Time Roles</StyledH3Common>

            <StyledH4><strong>Teaching Assistant</strong> - <em>Boston University</em> (2023-Present)</StyledH4>
            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon>Helped students debug programs and clarified complex concepts in CS-350 (Fundamentals of
                        Computing Systems).
                    </StyledMainLICommon>
                    <StyledMainLICommon>Graded assignments and provided feedback to ensure students’ learning objectives were met.</StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>
        </StyledMainContentCommon>
    )

}