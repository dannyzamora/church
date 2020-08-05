import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby";

import Carousel from "../components/Carousel"

const Home = ({ data }) => {
  return (
    <Layout><Carousel images={data.allFile.edges} /></Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
  }
`
export default Home;