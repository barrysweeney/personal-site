import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

function Job(props) {
  return (
    <div>
      <h3>{props.company}</h3>
      <p>{props.date}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default function Experience() {
  return (
    <Layout>
      <SEO title="Barry Sweeney's work experience" />
      <Header headerText="My experience" />
      <Job
        company="Kainos"
        date="One week student work experiences in July & October 2019"
        description="Worked on a team project developing and presenting a Python Discord server chatbot."
      />
      <Job
        company="NIE Networks"
        date="Nuffield Foundation Research Placement in Summer 2019"
        description="Authored research paper and
          presented the findings of an investigation into the application of
          digit recognition software to electricty meters, which received a Gold
          Crest award."
      />
      <Job
        company="ORACLE"
        date="One week student work experience in March 2018"
        description="Introduced to software architecture and microservices."
      />
      <Job
        company="Papa G's Pizza"
        date="September 2017 - April 2019"
        description="Building interpersonal skills while working in various
roles in a high-pressure environment."
      />

      <Header headerText="My education" />
      <p>
        Currently studying at Queen's University Belfast for BSc Computer
        Science
      </p>
    </Layout>
  )
}
