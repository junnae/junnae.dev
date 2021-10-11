import {Flex, Link, Paragraph} from "theme-ui";
import {StaticImage} from "gatsby-plugin-image";
import * as React from "react";


const profilePictureStyle = {
    borderRadius: "10%",
}

const Intro = () => {
    return (
<Flex sx={{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    maxHeight: '700px',
}}>
    <Paragraph sx={{textAlign: 'left'}}>
        Hey there!<br/>
        I'm a passionate full-stack software engineer from Norway 🇳🇴 <br/>
        Check out one of my <Link href="https://advice.moe">hobby projects</Link>
    </Paragraph>
    <StaticImage
        alt="Very professional picture of me"
        src={"../images/old.jpg"} style={profilePictureStyle}
        layout="constrained"
        height= '700'
    />
</Flex>
    )
}

export default Intro
