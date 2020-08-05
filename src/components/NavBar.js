import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar >
                <Container>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Othodox
                    </Typography>
                        <Button>Home</Button>
                        <Button>Services</Button>
                        <Button>Contact </Button>
                    </Toolbar>
                </Container>

            </AppBar>
        </>
    )
}

export default NavBar
