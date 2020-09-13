const React = require("react")
const Layout = require("./src/components/Layout").default


export const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <Layout {...props}>{element}</Layout>
}

export { wrapRootElement } from "./wrapRootElement";