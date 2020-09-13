import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"

import theme from "./theme.js"
const wrapRootElement = ({ element }) => {
    console.info(`theme`, theme)
    return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

export { wrapRootElement as default }