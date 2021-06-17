import * as React from "react";
import { Link } from "gatsby";
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
            <Link to="https://github.com/process-analytics">
                <img
                    alt="Github Logo"
                    src={ GithubImg }
                />
            </Link>
            <Link to="https://twitter.com/ProcessAnalyti1">
                <img
                    alt="Twitter Logo"
                    src={ TwitterImg }
                    width="120"
                    height="120"
                />
            </Link>
        </main>
    )
}
export default IndexPage