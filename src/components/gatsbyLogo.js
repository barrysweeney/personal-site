import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function GatsbyLogo() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/gatsby-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div style={{ width: 200 }}>
      Site powered by <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  )
}
