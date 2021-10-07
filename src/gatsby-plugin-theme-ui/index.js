import {deep} from "@theme-ui/presets";

const theme = {
    ...deep,
    colors: {
        ...deep.colors,
        text: "white",
        background: "#25274D",
        primary: "#2E9CCA",
        secondary: "red",
        highlight: "red",
        purple: "red",
        muted: "red",
        gray: "red",
    },
    styles: {
        a: {
           textDecoration: "none",
            color: "primary"
        }
    }
}
export default theme
