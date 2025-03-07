import styled from "styled-components";
import usePageTitle from "../../custom-hooks/usePageTitle.ts";
import { StyledMainContentCommon } from "../common-styles/StyledMainContentCommon.tsx";
import { StyledMainLICommon } from "../common-styles/StyledMainLICommon.tsx";
import { StyledMainListsCommon } from "../common-styles/StyledMainListsCommon.tsx";
import { StyledH2Common } from "../common-styles/StyledH2Common.tsx";
import { StyledH3Common } from "../common-styles/StyledH3Common.tsx";

export function Certifications() {
    usePageTitle();

    return (
        <StyledMainContentCommon>
            <div className="certifications-wrapper">
                <StyledH2Common>Certifications</StyledH2Common>
            </div>

            {/*First section*/}
            <StyledH3Common>Technical Certifications</StyledH3Common>
            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon>
                        <strong>Google IT Support Certificate</strong>
                        <p>Completed a comprehensive program covering troubleshooting, system administration, and
                            networking basics. (2023)</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>Responsive Web Design</strong> - <em>freeCodeCamp</em>
                        <p>Learned to create responsive, mobile-friendly websites using HTML, CSS, and Bootstrap.
                            (2022)</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>Microsoft Azure Fundamentals</strong>
                        <p>Gained a foundational understanding of cloud computing, Azure services, and security best
                            practices. (2024)</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>IBM Cybersecurity Analyst Certificate</strong> - <em>IBM/Coursera</em>
                        <p>Completed coursework on ethical hacking and security operations. (2023)</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>Google Cybersecurity Professional Certificate</strong> - <em>Google/Coursera</em>
                        <p>Developed practical skills in risk management, incident response, and threat detection.
                            (2023)</p>
                    </StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>

            {/*Second section*/}
            <StyledH3Common>Soft Skills Certifications</StyledH3Common>
            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon>
                        <strong>Effective Communication for Leaders</strong> - <em>LinkedIn Learning</em>
                        <p>Developed skills to communicate clearly and lead teams effectively. (2023)</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>Teamwork and Collaboration</strong> - <em>Harvard Online</em>
                        <p>Learned strategies for successful team collaboration in dynamic environments. (2022)</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>Public Speaking & Presentation Skills</strong> - <em>Harvard Online</em>
                        <p>Gained confidence in delivering structured speeches and engaging presentations. (2023)</p>
                    </StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>
        </StyledMainContentCommon>
    )

}