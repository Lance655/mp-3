import usePageTitle from "../../custom-hooks/usePageTitle.ts";
import { StyledMainContentCommon } from "../common-styles/StyledMainContentCommon.tsx";
import { StyledMainListsCommon } from "../common-styles/StyledMainListsCommon.tsx";
import { StyledMainLICommon } from "../common-styles/StyledMainLICommon.tsx";
import { StyledH2Common } from "../common-styles/StyledH2Common.tsx";
import { StyledH3Common } from "../common-styles/StyledH3Common.tsx";

export function Achievements() {
    usePageTitle();

    return (
        <StyledMainContentCommon>
            <div className="achievements-wrapper">
                <StyledH2Common>Achievements</StyledH2Common>
            </div>

            {/*First section*/}
            <StyledH3Common>Competitions and Hackathons</StyledH3Common>

            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon>
                        <strong>1st Place</strong> - HackBU 2023
                        <p>Developed a sentient artificial intelligence with emotions and rational thought.</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>2nd Place</strong> - National Programming Challenge 2023
                        <p>Designed a solution for real-time data analysis using Java and SQL, winning the runner-up
                            position.</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>Finalist</strong> - Google Code Jam 2023
                        <p>Competed against over 100,000 participants worldwide and came out as the sole winner.</p>
                    </StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>

            {/*Second section*/}
            <StyledH3Common>Other Notable Achievements</StyledH3Common>
            <StyledMainListsCommon>
                <ul>
                    <StyledMainLICommon>
                        <strong>Youngest Michelin Star Chef</strong> - Michelin Guide 2023
                        <p>Defeated Gordon Ramsay in a 3 way cook off showdown.</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>Traditional Painting Winner</strong> - Arts Festival 2022
                        <p>Won the most prestigious painting competition in France and was nicknamed "The Modern Da
                            Vinci".</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>12x Gold Medal Olympic Athlete</strong> - Olympic Games 2022
                        <p>Won the gold medal in the 12x100m freestyle relay at the age of 7.</p>
                        <p>Won the gold medal in archery.</p>
                        <p>Won the gold medal in pole vaulting.</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon><strong>Fastest Nascar driver</strong> - Nascar 2023
                        <p>Went from 12th to 1st position in the final lap of the Grand Prix.</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>Top 5% on LeetCode (2024)</strong>
                        <p>Ranked among the top 5% in LeetCode global contests for problem-solving.</p>
                    </StyledMainLICommon>
                    <StyledMainLICommon>
                        <strong>Personal Coding Milestone</strong>
                        <p>Built my first full-stack web application by self-learning HTML, CSS, and JavaScript during
                            summer break.</p>
                    </StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>

        </StyledMainContentCommon>
    );


}