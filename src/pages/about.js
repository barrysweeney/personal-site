import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="About" />
      <Header headerText="About" />
      <p>
        Besides coding, I practice Brazilian Jiu-Jitsu and play guitar. I'm also
        really into books and podcasts, you can check out{" "}
        <a href="https://www.goodreads.com/user/show/72368832-barry">
          my Goodreads
        </a>{" "}
        if you're interested in that sort of thing.
      </p>
    </Layout>
  )
}
