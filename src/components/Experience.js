import * as React from "react";
import {Alert, Box, Flex, Heading, Message} from "theme-ui";

const jobs = [
    {
        name: "CGI",
        title: "Consultant",
        from: "March 2016",
        to: "December 2017",
        description: "I worked with test management, automated testing and development. " +
            "I created internal tools used daily for test management",
        projects: [],
    },
    {
        name: "Sopra Steria",
        title: "Software Engineer",
        from: "January 2018",
        to: "",
        description: "Working as a consultant for Sopra Steria's customers",
        projects: [
            {
                customer: "NAV",
                from: "January 2018",
                to: "July 2021",
                description: "I did some stuff",
            },
            {
                customer: "Vipps",
                from: "August 2021",
                to: "",
                description: "xx yy zz"
            }
        ]
    },
]

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
                                            <Message>{project.description}</Message>
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
