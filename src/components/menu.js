import {Link} from "@reach/router";
import * as React from "react";

const Menu = () => {
    return (
        <nav>
            <Link to="/">Intro</Link>
            <Link to="/tech/">Tech</Link>
            <Link to="/experience/">Experience</Link>
        </nav>
    )
}

export default Menu
