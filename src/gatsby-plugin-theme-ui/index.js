import {deep} from "@theme-ui/presets";
import "@fontsource/roboto/300.css"

const theme = {
    ...deep,
    styles: {
        ...deep.styles,
    },
    links: {
        nav: {
            color: 'secondary',
            textDecoration: 'none',
            fontSize: '5',
        },
    },
    buttons: {
        menu: {
            color: 'secondary'
        }
    },
    fonts: {
        body: "Roboto"
    }
}
export default theme
