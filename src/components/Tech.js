import {Alert, Box, Flex, Heading, Message} from "theme-ui";
import * as React from "react";
import Certifications from "./Certifications";

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
        description: "Docker, Kubernetes, GitHub Actions"
    },
    {
        name: "Other",
        description: "Microservice Architecture, Apache Kafka"
    },
]

export default function Tech() {
    return (
        <Flex sx={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '20px',
        }}>
            <Box>
            <Heading>Favorite tech</Heading>
            {
                technologies.map(tech => (
                    <div>
                        <Alert>{tech.name}</Alert>
                        <Message>{tech.description}</Message>
                        <br/>
                    </div>
                ))
            }
            </Box>
            <Box>
            <Certifications/>
            </Box>
        </Flex>
    )
}
