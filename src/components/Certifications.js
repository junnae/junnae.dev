import {Alert, Box, Heading} from "theme-ui";
import * as React from "react";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getColor} from "@theme-ui/color";
import theme from "../gatsby-plugin-theme-ui";

const certfications = [
    {
        name: "ISTQB Foundation",
    },
    {
        name: "Oracle Certified Associate, Java SE 8 Programmer",
        link: "https://www.youracclaim.com/badges/9f6303d4-e7e3-43b3-9396-9793f9eadefd/public_url"
    }, {
        name: "Kotlin for Java Developers",
        link: "https://www.coursera.org/account/accomplishments/certificate/2FMCZ4CHWUGP"
    }
]


const linkStyle = {
    color: getColor(theme, 'secondary'),
    textDecoration: 'none',
}

const Certifications = () => {
    return (
        <div>
            <Heading>Certifications</Heading>
            {
                certfications.map(cert => (
                    <Box>
                        { ((cert.link != null) &&
                        <a href={cert.link} style={linkStyle}> <Alert>{cert.name}{'\u00A0'}<FontAwesomeIcon icon={faExternalLinkAlt}/> </Alert></a>
                        )
                        || <Alert>{cert.name}</Alert>
                        }
                        <br/>
                    </Box>
                ))
            }
        </div>
    )
}

export default Certifications
