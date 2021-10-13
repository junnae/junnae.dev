import * as React from "react";
import Menu from "./menu";
import {faFileCode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () =>{
    return (
        <div>
            <h1>CV {'\u00A0'}<FontAwesomeIcon icon={faFileCode}/></h1>
            <Menu/>
        </div>
    )
}

export default Header
