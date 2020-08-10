const React = require("react")
const Layout = require("./src/components/layout").default
const CssBaseline = require('@material-ui/core/CssBaseline').default

exports.wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
    return (
        <CssBaseline>
            {element}
        </CssBaseline>
    )
}