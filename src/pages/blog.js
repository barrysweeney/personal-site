import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

export default function Blog({ data }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Header headerText="My blog"></Header>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            <span style={{ color: `grey` }}>{node.frontmatter.date}</span>
            <p>{node.frontmatter.description}</p>{" "}
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          id
          html
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
