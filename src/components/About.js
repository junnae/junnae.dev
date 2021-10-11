import {Flex, Paragraph} from "theme-ui";
import {StaticImage} from "gatsby-plugin-image";
import * as React from "react";
import {getColor} from "@theme-ui/color";
import theme from "../gatsby-plugin-theme-ui";


const profilePictureStyle = {
    borderRadius: "10%",
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
            maxHeight: '700px',
            maxWidth: '100vw',
        }}>
            <Paragraph sx={{textAlign: 'left'}}>
                Hey there!<br/>
                I'm a passionate full-stack software engineer from Norway 🇳🇴 <br/>
                Feel free to check out my github, and reach out
                Check out one of my <a href="https://advice.moe" style={linkStyle}>hobby projects</a>
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
