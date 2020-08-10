import React from "react"
import { Link, graphql } from "gatsby";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Carousel from "../components/Carousel"

const useStyles = makeStyles({
  container: {
    placeItems: 'center'
  }
});
const Home = ({ data }) => {
  const classes = useStyles();
  return (

    <Container className={classes.container}>
      <Carousel images={data.allFile.edges} />
    </Container>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
  }
`
export default Home;