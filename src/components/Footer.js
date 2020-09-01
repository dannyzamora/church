import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({

})
const Footer = () => {

    const classes = styles()

    return (
        <AppBar position='relative' >
            <Typography variant="h6" >
                Facebool Twitter Youtube
    </Typography>
        </AppBar>
    )
}

export default Footer
