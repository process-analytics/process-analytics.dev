import * as React from "react";
import GithubImg from "../images/GitHub-Mark-120px-plus.png";
import TwitterImg from "../images/Twitter-social-icons-circle-blue.svg";

const IndexPage = () => {
    return (
        <main>
            <title>Process Analytics</title>
            <h1>Process Analytics</h1>
            <p>
                Set of open source resources that developers can use to build BPMN-based Process Analytics software to visualize Process-Execution-related data.
            </p>
            <a href="https://github.com/process-analytics">
                <img
                    alt="Github Logo"
                    src={ GithubImg }
                />
            </a>
            <a href="https://twitter.com/ProcessAnalyti1">
                <img
                    alt="Twitter Logo"
                    src={ TwitterImg }
                    width="120"
                    height="120"
                />
            </a>
        </main>
    )
}
export default IndexPage