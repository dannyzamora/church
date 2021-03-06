import React, { Fragment } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    layout: {
        display: 'grid',
        gridTemplateRows: "auto 1fr auto",
        height: '100vh',

    }
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.layout}>
                <div>
                    <NavBar />
                </div>

                <div>{children}</div>
                <div><Footer /></div>


            </div>
        </>



    )
}

export default Layout
