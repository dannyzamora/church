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
    table: {

    },
}));


const Mass = () => {
    const classes = useStyles();
    return (


        < Container style={{ display: 'grid', placeItems: 'center' }}>
            <Card className={classes.root} elevation={3}>
                <CardMedia>
                    <div >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1038.6623725370712!2d-121.893611340037!3d37.34865498524636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc84df7d17a7%3A0x198bf428f4ebeac9!2sDykk%20Gabriel%20Eotc!5e1!3m2!1sen!2sus!4v1597895535499!5m2!1sen!2sus" width="500" height="500" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </CardMedia>
                <CardContent>
                    <TableContainer >
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableCell>Mass Hours</TableCell>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        Saturday
                                        </TableCell>
                                    <TableCell align="left">6:00am - 10:00am</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        Sunday
                                        </TableCell>
                                    <TableCell align="left">6:00am - 11:00am</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer  >
                        <Table className={classes.table} aria-label="simple table">

                            <TableBody>
                                <TableRow >
                                    <TableCell scope="row">
                                        Location
                                        </TableCell>
                                    <TableCell align="left">587 N 6th St, San Jose, CA 95112</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        Mailing Address
                                        </TableCell>
                                    <TableCell align="left">PO BOX</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        Email Address
                                        </TableCell>
                                    <TableCell align="left">church@gmail.com</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        Number
                                        </TableCell>
                                    <TableCell align="left">1234567890</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Container >
    )
}

export default Mass