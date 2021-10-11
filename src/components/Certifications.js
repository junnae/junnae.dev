import {Alert, Box, Heading} from "theme-ui";
import * as React from "react";

const certfications = [
    {
        name: "ISTQB Foundation"
    },
    {
        name: "Oracle Certified Associate, Java SE 8 Programmer",
        link: "https://www.youracclaim.com/badges/9f6303d4-e7e3-43b3-9396-9793f9eadefd/public_url"
    }
]


const Certifications = () => {
    return (
        <div>
            <Heading>Certifications</Heading>
            {
                certfications.map(cert => (
                    <Box>
                    <Alert>{cert.name}</Alert>
                    <br/>
                    </Box>
                ))
            }
        </div>
    )
}

export default Certifications
