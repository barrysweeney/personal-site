import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Header headerText="Reach out to me" />
      <p>
        Email:{" "}
        <a href="mailto:barrysweeney172@live.co.uk">
          barrysweeney172@live.co.uk
        </a>
      </p>
    </Layout>
  )
}
