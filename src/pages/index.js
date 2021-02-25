import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header headerText="Barry Sweeney" />
      <span style={{ fontWeight: 700 }}>Software Engineer | DIY Musician? </span>
      <p>
        I don't really use social media so I'm going old school and carving out my little space on the web here.
      </p>

      <p>
        I guess I'll just use this place to share stuff. Who knows.
      </p>
    </Layout>
  )
}
