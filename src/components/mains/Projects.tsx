import { StyledMainContentCommon } from "../common-styles/StyledMainContentCommon.tsx";
import { StyledMainLICommon } from "../common-styles/StyledMainLICommon.tsx";
import { StyledMainListsCommon } from "../common-styles/StyledMainListsCommon.tsx";
import { StyledH2Common } from "../common-styles/StyledH2Common.tsx";
import { StyledH3Common } from "../common-styles/StyledH3Common.tsx";
import { Calculator } from "./Calculator.tsx";
import usePageTitle from "../../custom-hooks/usePageTitle.ts";

export function Projects () {

    usePageTitle();

    return (

        <StyledMainContentCommon>
            <div className="projects-wrapper">
                <StyledH2Common>Projects</StyledH2Common>
            </div>
            {/*Section 1*/}
            <StyledH3Common>Artificial Intelligence & Machine Learning</StyledH3Common>

            <StyledMainListsCommon>
                <ul>
                    {/*Project 1*/}
                    <StyledMainLICommon>
                        <strong>Chess AI with Alpha-Beta Pruning</strong>
                        <p>Developed a Chess AI agent using alpha-beta pruning, piece-square tables, and heuristic
                            evaluations.</p>
                        <p><em>Technologies:</em> Java, Minimax Algorithm, Sepia Game Engine</p>
                    </StyledMainLICommon>
                    {/*Project 2*/}
                    <StyledMainLICommon>
                        <strong>Reinforcement Learning Pac-Man</strong>
                        <p>Implemented a Pac-Man agent using Q-learning to optimize movement and decision-making.</p>
                        <p><em>Technologies:</em> Python, OpenAI Gym, NumPy</p>
                    </StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>

            {/*Section 2*/}
            <StyledH3Common>Systems & Networking</StyledH3Common>

            <StyledMainListsCommon>
                <ul>
                    {/*Project 1*/}
                    <StyledMainLICommon>
                        <strong>Multi-Threaded Web Server</strong>
                        <p>Built a high-performance multi-threaded web server using POSIX threads to handle concurrent
                            requests.</p>
                        <p><em>Technologies:</em> C, Sockets, pthreads</p>
                    </StyledMainLICommon>
                    {/*Project 2*/}
                    <StyledMainLICommon>
                        <strong>Load Balancer for Distributed Systems</strong>
                        <p>Implemented a round-robin load balancer to distribute web traffic across multiple backend
                            servers.</p>
                        <p><em>Technologies:</em> Python, Flask, Nginx</p>
                    </StyledMainLICommon>
                </ul>
            </StyledMainListsCommon>

            {/* Calculator Component */}
            <StyledH3Common>Calculator</StyledH3Common>
            <Calculator />

        </StyledMainContentCommon>

    );
}