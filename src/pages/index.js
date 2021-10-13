// noinspection InvisibleCharacter

import * as React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
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
