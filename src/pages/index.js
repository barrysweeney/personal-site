import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header headerText="Barry Sweeney" />
      <p>I'm a full stack web developer</p>
      <p>Learning is my jam</p>
    </Layout>
  )
}
