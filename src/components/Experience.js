import * as React from "react";
import {Heading, Paragraph} from "theme-ui";

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
            },
            {
                customer: "Vipps",
                from: "August 2021",
                to: "",
            }
        ]
    },
]


const Experience = () => {
    return (
        <div>
            <Heading>Experience</Heading>
            {
                jobs.map(job => (
                    <div>
                        <h3>{job.title} at {job.name} ({job.from} - {job.to})</h3>
                        <Paragraph>
                            {job.description}
                        </Paragraph>
                        {
                            job.projects.map(project => (
                                <div>
                                    <h3>{project.customer} ({project.from} - {project.to})</h3>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Experience
