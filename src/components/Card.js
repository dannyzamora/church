import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import Img from "gatsby-image"

const styles = makeStyles({
    card: {
        minWidth: 300
    }
})

const MyCard = (props) => {
    const classes = styles(props);
    return <Card className={classes.card} {...props} />
}

const BioCard = ({ fluid, title, description, column }) => {

    const classes = styles();

    return (
        <MyCard >

            <CardMedia
                component={Img}
                fluid={fluid}
            />
            <CardContent >
                <Typography

                    variant={"h6"}
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography

                    variant={"h6"}
                    gutterBottom
                >
                    {description}
                </Typography>
            </CardContent>
        </MyCard>
    )
}

export default BioCard