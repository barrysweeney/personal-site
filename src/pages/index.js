import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header headerText="Barry Sweeney" />
      <span style={{ fontWeight: 700 }}>Full stack web developer</span>
      <p>
        I love learning new things and trying out different technologies and
        tools.
      </p>

      <p>
        You can find out a bit more about me <Link to="/about">here</Link>
      </p>
    </Layout>
  )
}
