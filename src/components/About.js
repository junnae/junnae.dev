import {Flex, Paragraph} from "theme-ui";
import {StaticImage} from "gatsby-plugin-image";
import * as React from "react";
import {getColor} from "@theme-ui/color";
import theme from "../gatsby-plugin-theme-ui";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";


const profilePictureStyle = {
    borderRadius: "10%",
    maxHeight: '50vh',
    maxWidth: '50vh',
}

const linkStyle = {
    color: getColor(theme, 'secondary'),
    textDecoration: 'none',
}

const About = () => {
    return (
        <Flex sx={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '90vw',
        }}>
            <Paragraph sx={{textAlign: 'left'}}>
                Hi there, I'm Aleksander!<br/>
                I'm a passionate full-stack software engineer from Norway 🇳🇴 <br/>
                Feel free to check out my<a href={"https://github.com/junnae"} style={linkStyle}> {'\u00A0'} <FontAwesomeIcon icon={faGithub}/> GitHub</a> <br/>
                You can contact me at <a href="mailto: post@junnae.dev" style={linkStyle}><FontAwesomeIcon icon={faEnvelope} />post@junnae.dev</a>
            </Paragraph>
            <StaticImage
                alt="Very professional picture of me"
                src="../images/old.jpg" style={profilePictureStyle}
                layout="constrained"
                height='700'
            />
        </Flex>
    )
}

export default About
