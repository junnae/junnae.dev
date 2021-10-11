import {Heading} from "theme-ui";
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
        description: "Docker, Kubernetes, Github Actions"
    },
    {
        name: "Other",
        description: "Microservice Architecture, Apache Kafka"
    },
]

export default function Tech() {
    return (
        <div>
            <Heading>Some of my favorite technologies</Heading>
            {
                technologies.map(tech => (
                    <div>
                        <h3>{tech.name}</h3>
                        <p>{tech.description}</p>
                    </div>
                ))
            }
            <Certifications/>
        </div>
    )
}
