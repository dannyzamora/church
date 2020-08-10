import React, { Fragment } from 'react'
import NavBar from './NavBar'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({

});
const useStyles = makeStyles((theme) => ({
    layout: {
        display: 'grid',
        gridTemplate: "minmax(70px, auto) 1fr /auto"

    }
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.layout}>
                <div>
                    <NavBar />
                </div>

                {children}
            </div>


        </ThemeProvider>
    )
}

export default Layout
