import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About() {
  return (
    <Layout>
      <SEO title="About me" />
      <Header headerText="About me" />
    </Layout>
  )
}
