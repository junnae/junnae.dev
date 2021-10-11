import {Link} from "@reach/router";
import {MenuButton, NavLink} from "theme-ui"
import {slide as BurgerMenu} from "react-burger-menu"
import * as React from "react";
import { getColor } from '@theme-ui/color'
import theme from "../gatsby-plugin-theme-ui";



const burgerStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        //background: '#373a47'
    },
    bmBurgerBarsHover: {
        //background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background:  getColor(theme, 'secondary')
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: getColor(theme, 'background'),
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: getColor(theme, 'secondary'),
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        backgroundColor: getColor(theme, 'darken')
    }
}

class Menu extends React.Component {
    render() {
        return (
            <BurgerMenu pageWrapId="main-content" outerContainerId="outer-container" customBurgerIcon={
                <MenuButton aria-label="Toggle Menu" />
            }
            styles={burgerStyles}
            >
                <Link to="/"><NavLink>About</NavLink></Link><br/>
                <Link to="/tech/"><NavLink>Tech</NavLink></Link><br/>
                <Link to="/experience/"><NavLink>Experience</NavLink></Link>
            </BurgerMenu>
        )
    }
}

export default Menu
