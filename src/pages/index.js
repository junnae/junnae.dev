// noinspection InvisibleCharacter

import * as React from "react"
import {Divider, Spinner} from 'theme-ui'
import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/menu";
import MainContent from "../components/MainContent";

const pageStyles = {
    width: "100%",
    textAlign: "center",
}




// markup
const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <title>Resume</title>
            <meta charSet="utf-8"/>
            <Header/>
            <Divider/>
            <MainContent/>
            <Divider/>
            <Menu/>
            <Divider/>
            <Footer/>
        </main>
    )
};

export default IndexPage
