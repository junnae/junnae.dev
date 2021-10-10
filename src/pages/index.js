// noinspection InvisibleCharacter

import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {Divider, Flex, Heading, Link, Paragraph} from 'theme-ui'

const pageStyles = {
    width: "100%",
    textAlign: "center",
}

const profilePictureStyle = {
    borderRadius: "10%",
}

const technologies = [
    {
        name: "Backend development",
        description: "Java, Kotlin"
    },
    {
        name: "Frontend development",
        description: "React"
    },
    {
        name: "Devops",
        description: "Docker, Kubernetes, Github Actions"
    },
    {
        name: "Other",
        description: "Microservice Architecture, Apache Kafka"
    },
]

const certfications = [
    {
        name: "ISTQB Foundation"
    },
    {
        name: "Oracle Certified Associate, Java SE 8 Programmer",
        link: "https://www.youracclaim.com/badges/9f6303d4-e7e3-43b3-9396-9793f9eadefd/public_url"
    }
]

// markup
const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <title>Resume</title>
            <meta charSet="utf-8"/>
            <h1>Aleksander Andresen 💻</h1>
            <Divider/>
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
            <Divider/>
            <Heading>Some of my favorite technologies</Heading>
            {
                technologies.map(tech => (
                    <div>
                        <h3>{tech.name}</h3>
                        <p>{tech.description}</p>
                    </div>
                ))
            }
            <img
                alt="Gatsby G Logo"
                src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
        </main>
    )
};

export default IndexPage
