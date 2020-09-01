import React from 'react'
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    title: {
        display: 'flex'
    },
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white
        },
    },
}))(MenuItem);


const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <AppBar >
                <Container className={classes.title}>
                    <Toolbar style={{ marginLeft: 'auto' }} >
                        {/* <Typography variant="h6" className={classes.title}>
                            Othodox
                    </Typography> */}
                        <Button component={Link} to="/">
                            <Typography variant="body1"  >
                                Home
                        </Typography>

                        </Button>
                        <div>
                            <Button aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
                                <Typography variant="body1"  >
                                    Church
                        </Typography>
                            </Button>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <StyledMenuItem component={Link} to="/services" onClick={handleClose}>Services</StyledMenuItem>
                                <StyledMenuItem component={Link} to="/mass" onClick={handleClose}>Mass</StyledMenuItem>
                                <StyledMenuItem component={Link} to="/calendar" onClick={handleClose}>Calendar</StyledMenuItem>


                            </StyledMenu>
                        </div>
                        <Button>
                            <Typography variant="body1"  >
                                Contact
                        </Typography>
                        </Button>
                    </Toolbar>
                </Container>

            </AppBar>
        </>
    )
}

export default NavBar
