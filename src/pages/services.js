import React from "react"
import { Link, graphql } from "gatsby";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CardList from '../components/CardList'

const Services = ({ data }) => {
  return (


    < Container>
      <Grid container >
        <Grid item xs={6}>
          <CardList column data={data.allMarkdownRemark.edges} />

        </Grid>
      </Grid>
    </Container >
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/services/"}}) {
      edges {
        node {
          frontmatter {
            title
            path
            description
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
export default Services