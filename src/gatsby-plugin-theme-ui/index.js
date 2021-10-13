import {deep} from "@theme-ui/presets";

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
    }
}
export default theme
