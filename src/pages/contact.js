import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact me" />
      <Header headerText="Reach out to me" />
      <p>
        Email:{" "}
        <a href="mailto:barrysweeney172@live.co.uk">
          barrysweeney172@live.co.uk
        </a>
      </p>
      <p>
        Twitter:{" "}
        <a href="https://twitter.com/barrysweeneydev">@barrysweeneydev</a>
      </p>
    </Layout>
  )
}
