import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const footerStyle = {
    width: '100%',
    position:'absolute',
    bottom: '0',
}

const Footer = () => {
    return (
        <div style={footerStyle}>
            <a href="https://github.com/junnae"><StaticImage alt="github logo" src="../images/github-mark.png"/></a>
            {'\u00A0'}
            <a href="https://www.linkedin.com/in/junnae/"><StaticImage alt="github logo" src="../images/linkedin.png" height="32" width="32"/></a>
        </div>
    )
}

export default Footer
