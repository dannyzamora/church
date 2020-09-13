import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"

import theme from "./theme.js"
export const wrapRootElement = ({ element }) => {
    console.info(`theme`, theme)
    return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
