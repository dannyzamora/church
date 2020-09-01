import React from 'react'

import Card from './Card'

import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    container: {

        maxWidth: 1220
    },
    grid: {

        '& .MuiGrid-item': {
            alignItems: 'center',
        }
    }
})
function MyGrid(props) {
    const { c, ...other } = props;
    const classes = useStyles(props);
    return <Grid className={classes.root} {...other} />;
}
const CardList = ({ data, column }) => {
    console.log(column)
    return (
        <MyGrid container item={true} spacing={10} xs={12} justify='center'>
            {data.map((item, index) => {
                const { node: {
                    frontmatter: {
                        title,
                        description,
                        image: {
                            childImageSharp: {
                                fluid
                            }
                        }
                    }
                } } = item;
                return (
                    <Grid item key={index}>
                        <Card column={column} fluid={fluid} title={title} description={description} />
                    </Grid>
                )
            })}
        </MyGrid>
    )
}

export default CardList
