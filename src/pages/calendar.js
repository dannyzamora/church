import React from "react"
import { Link, graphql } from "gatsby";

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: 960
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    calendar: {
        border: "solid 1px #777",
        width: 800,
        height: 600
    },
}));


const Mass = () => {
    const classes = useStyles();
    return (


        < Container style={{ display: 'grid', placeItems: 'center' }}>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=bzM5bDhlNW83MjUzMjRja2J0ajRqcnZqYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E67C73"
                className={classes.calendar}
                frameBorder="0"
                scrolling="no"></iframe>

            <Paper style={{ width: 800 }} elevation={3}>
                <Typography variant='h5'>2020 Holidays</Typography>
                <Divider />
            </Paper>
        </Container >
    )
}

export default Mass