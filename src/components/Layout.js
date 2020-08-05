import React from 'react'
import NavBar from './NavBar'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({

});

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <NavBar />
            {children}

        </ThemeProvider>
    )
}

export default Layout
