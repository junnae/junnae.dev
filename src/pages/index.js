// noinspection InvisibleCharacter

import * as React from "react"
import {Divider} from 'theme-ui'
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";

const pageStyles = {
    width: "100%",
    maxWidth: "100%",
    overflowX: "hidden",
    textAlign: "center",
    position: "relative",
    height: '100%',
    minHeight: '100vh'
}

// markup
const IndexPage = () => {
    return (
        <main style={pageStyles} id="outer-container">
            <title>Resume</title>
            <meta charSet="utf-8"/>
            <Header/>
            <div id="main-content">
                <MainContent/>
            </div>
            <Footer/>
        </main>
    )
};

export default IndexPage
