import Intro from "./Intro";
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
            <Intro path="/"/>
            <Tech path="/tech/"/>
            <Experience path="/experience/"/>
        </Router>
    )
}
export default MainContent
