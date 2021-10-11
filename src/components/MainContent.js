import About from "./About";
import Tech from "./Tech";
import {Router} from "@reach/router";
import * as React from "react";
import Experience from "./Experience";

const contentStyles = {
    textAlign: "left",
}

const MainContent = () => {
    return (
        <Router style={contentStyles}>
            <About path="/"/>
            <Tech path="/tech/"/>
            <Experience path="/experience/"/>
        </Router>
    )
}
export default MainContent
