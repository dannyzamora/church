const React = require("react")
const Layout = require("./src/components/layout").default
const CssBaseline = require('@material-ui/core/CssBaseline').default
const createMuiTheme = require('@material-ui/core/styles/createMuiTheme').default
const ThemeProvider = require(`@material-ui/core/styles`).ThemeProvider

const theme = createMuiTheme({

    palette: {
        background: {
            default: '#E8E8E8',
            paper: "#DCDCDC"
        }
    },


});

exports.wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme} >
            <CssBaseline>
                {element}
            </CssBaseline>
        </ThemeProvider>

    )
}