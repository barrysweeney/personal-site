import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header headerText="Barry Sweeney" />
      <span style={{ fontWeight: 700 }}>Software Engineer</span>
      <p>
        Hi, welcome to my personal site. Just going to be sharing coding projects, and maybe even some music in the
        future.
      </p>
    </Layout>
  )
}
