import * as React from "react";
import {Alert, Box, Flex, Heading, Message, Paragraph} from "theme-ui";
import {getColor} from "@theme-ui/color";
import theme from "../gatsby-plugin-theme-ui";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const jobs = [
    {
        name: "CGI",
        title: "\"Consultant\"",
        from: "March 2016",
        to: "December 2017",
        description: "I worked with test management, automated testing and development. " +
            "I created and designed internal tools used daily for test management",
        projects: [],
    },
    {
        name: "Sopra Steria",
        title: "Software Engineer",
        from: "January 2018",
        to: "",
        description: "Consultant for Sopra Steria's customers",
        projects: [
            {
                customer: "NAV (Norwegian Labour and Welfare Administration)",
                from: "January 2018",
                to: "July 2021",
                description: `Development and design of solutions for Parental and Sick Benefits. \n
                 Leveraged microservices architecture to create scalable kotlin applications communicating asynchronously using kafka. \n
                 Created React-based frontends mainly for case workers. \n
                 Set up of pipelines and dashboards for monitoring of production. 
                 `,
            },
            {
                customer: "Vipps",
                from: "August 2021",
                to: "",
                description: "Development and design of Java applications for the national payment system in Norway"
            }
        ]
    },
]

const linkStyle = {
    color: getColor(theme, 'secondary'),
    textDecoration: 'none',
}

const Experience = () => {
    return (
        <Flex sx={{
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'justify',
            //maxHeight: '700px',
        }}>
            <Box><Heading>Experience</Heading>
                <Box>
                    <Alert>Hobby project(s)</Alert>
                    <Message>
                        <a href="https://advice.moe" style={linkStyle}>advice.moe <FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                        <a href={"https://github.com/junnae/anime-wisdom"} style={linkStyle}> {'\u00A0'} (Github)<FontAwesomeIcon icon={faGithub}/></a>
                    </Message>
                    <br/>
                </Box>
                {
                    jobs.map(job => (
                        <Box>
                            <Alert>{job.title} at {job.name} ({job.from} - {job.to})</Alert>
                            <Message>
                                {job.description}
                                {
                                    job.projects.map(project => (
                                        <Box>
                                            <br/>
                                            <Alert>{project.customer} ({project.from} - {project.to})</Alert>
                                            <Message>{project.description.split('\n').map( line=>
                                                <Paragraph>{line}</Paragraph>
                                            )}</Message>
                                        </Box>
                                    ))
                                }
                            </Message>
                            <br/>
                        </Box>
                    ))
                }
            </Box>
        </Flex>
    )
}

export default Experience
