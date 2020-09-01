import React from "react"
import { Link, graphql } from "gatsby";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CardList from '../components/CardList'
import Carousel from "../components/Carousel"


const useStyles = makeStyles({
  container: {

    maxWidth: 1220
  },
  grid: {

    '& .MuiGrid-item': {
      alignItems: 'center',
    }
  }

  // top: {
  //   marginBottom: '10vh'
  // },
  // divider: {
  //   margin: "0 0 2vh 0"
  // },
  // button: {
  //   display: 'grid',
  //   placeItems: 'center',
  //   margin: 20
  // }
  // , deacons: {
  //   display: 'grid',
  //   placeItems: 'center',

  // }
});
const Home = ({ data }) => {
  const classes = useStyles();
  return (


    < Container>

      <Grid container spacing={4} justify='center' align='center' className={classes.grid}>
        <Grid item xs={12}>
          <Carousel images={data.allFile.edges} />
        </Grid>

        <Grid item xs={12}>
          <Typography align='center' variant="h3">
            St Gabriel Ethiopian Orthodox Church  <br /> San Jose
      </Typography>
          <Divider className={classes.divider} />
        </Grid>

        <Grid item xs={12}>
          <Typography align='center' variant='h3'> ABOUT CHURCH</Typography>
        </Grid>

        <Grid item align='center' xs={12}>
          <Typography align='center' variant="h3">
            The Deacons
      </Typography>
          <Divider className={classes.divider} />
          <CardList data={data.allMarkdownRemark.edges} />
        </Grid>

        <Grid item align='center' xs={12}>
          <Typography align='center' variant='h6'> Be on your guard; stand firm in the faith; be courageous; be strong.
- Corinthians 16:13</Typography>

          <Button variant="contained" color="primary" >Church Bylaws</Button>
        </Grid>


      </Grid>

    </Container >
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight:850, quality: 100) {
               ...GatsbyImageSharpFluid
              }
            }
          }
        }

      }
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/home/"}}) {
        edges {
          node {
            frontmatter {
              title
              path
              image {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
  }

`
export default Home;