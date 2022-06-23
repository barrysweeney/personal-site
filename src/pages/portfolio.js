import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  padding: 5px;
  border-bottom: 1px solid grey;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
const TallScreenshotWrapper = styled.div`
  grid-column: 2;
  @media (max-width: 640px) {
    grid-column: 1;
  }
`

const TechnologyUsedWrapper = styled.div`
  grid-column: 1;
`

function Project(props) {
  return (
    <ProjectWrapper>
      <div className="description">
        <h3>{props.title}</h3>
        <a href={props.github}>
          <p>Github Repo</p>
        </a>
        <a href={props.demo}>
          <p>Live Site</p>
        </a>
        {props.description}
      </div>
      {props.wideImage ? (
        <div style={{ width: `100%`, gridColumn: 1 }}>
          <Img fluid={props.wideImage.childImageSharp.fluid} />
          {props.secondWideImage ? (
            <Img fluid={props.secondWideImage.childImageSharp.fluid} />
          ) : null}

          <br />
        </div>
      ) : null}

      {props.data ? (
        <TallScreenshotWrapper>
          <Img
            fixed={props.data.childImageSharp.fixed}
            style={{ borderRadius: `8px` }}
          />{" "}
        </TallScreenshotWrapper>
      ) : null}

      <TechnologyUsedWrapper>
        <h4>Built with</h4>
        {props.icons.map(icon => (
          <Img
            fixed={icon.childImageSharp.fixed}
            key={icon.id}
            style={{ margin: 5 }}
          />
        ))}
      </TechnologyUsedWrapper>
    </ProjectWrapper>
  )
}

export default function Portfolio({ data }) {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Header headerText="My portfolio" />
      <p>
        All of my projects are available on{" "}
        <a href="https://github.com/barrysweeney">my Github profile</a>
      </p>
      <Project
        title="Which Stranger Things character am I?"
        data={data.strangerthingsvertical}
        github="https://github.com/barrysweeney/upside-down/"
        demo="https://upsidedownbackend.herokuapp.com/login"
        description={
          <div>
            Angular App using Spotify Web API to find which Stranger Things character the user is most like
          </div>
        }
        icons={[data.angular, data.ts]}
        wideImage={data.strangerthingshorizontal}
      />
      <Project
        title="Jiu-Jitsu Companion"
        data={data.bjjgameplan}
        github="https://github.com/barrysweeney/bjj-companion/"
        demo="https://jiu-jitsu-companion.netlify.app/"
        description={
          <div>
            MERN stack app to track jiu-jitsu progress, create a gameplan, and
            take notes.
          </div>
        }
        icons={[data.mongodb, data.react, data.node]}
        wideImage={data.bjjprogress}
        secondWideImage={data.bjjnotes}
      />
      <Project
        title="Random Workout Generator"
        data={data.workout}
        github="https://github.com/barrysweeney/workout-app-helidon"
        demo="https://random-workout-generator.netlify.app/"
        description={
          <div>
            Oracle Helidon MP project including REST operations to obtain
            exercises from a MySQL database. Docker was introduced to speed up
            local development. The React frontend connects to a container
            deployed to Heroku. The steps to reproduce this are included in the
            README.
          </div>
        }
        icons={[data.helidon, data.react, data.docker, data.mysql]}
      />
      <Project
        title="Obscurify"
        data={data.obscurify}
        github="https://github.com/barrysweeney/obscurify/"
        demo="https://obscurify.netlify.app/"
        description={
          <div>
            React App using the Spotify Web API to find the least popular song for an artist.
          </div>
        }
        icons={[data.react, data.node]}
        wideImage={data.obscurifywide}
      />
      <Project
        title="Topbook"
        data={data.topbook}
        github="https://github.com/barrysweeney/TOPBOOK"
        demo="https://calm-falls-42453.herokuapp.com/"
        description={
          <div>NodeJS social media app with passport-github authentication.</div>
        }
        icons={[data.node, data.mongodb]}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    strangerthingshorizontal: file(relativePath: { eq: "images/strangerthings-hrizontal.PNG" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    strangerthingsvertical: file(relativePath: { eq: "images/strangerthings-vertical.PNG" }) {
      id
      childImageSharp {
        fixed(width: 200, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bjjgameplan: file(relativePath: { eq: "images/bjj-gameplan-app.png" }) {
      id
      childImageSharp {
        fixed(width: 200, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bjjprogress: file(relativePath: { eq: "images/bjj-progress-app.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bjjnotes: file(relativePath: { eq: "images/bjj-notes-app.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    workout: file(relativePath: { eq: "images/workout-app.png" }) {
      id
      childImageSharp {
        fixed(width: 200, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    obscurify: file(relativePath: { eq: "images/obscurify-portrait.png" }) {
      id
      childImageSharp {
        fixed(width: 200, height: 408) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    obscurifywide: file(relativePath: { eq: "images/obscurify-landscape.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    topbook: file(relativePath: { eq: "images/topbook-app.png" }) {
      id
      childImageSharp {
        fixed(width: 250, height: 430) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    react: file(relativePath: { eq: "images/react-icon.png" }) {
      id
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mysql: file(relativePath: { eq: "images/mysql-logo.png" }) {
      id
      childImageSharp {
        fixed(width: 167, height: 86) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    docker: file(relativePath: { eq: "images/docker-logo.png" }) {
      id
      childImageSharp {
        fixed(width: 130, height: 110) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    helidon: file(relativePath: { eq: "images/helidon-logo.png" }) {
      id
      childImageSharp {
        fixed(width: 220, height: 105) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    node: file(relativePath: { eq: "images/node-icon.png" }) {
      id
      childImageSharp {
        fixed(width: 195, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mongodb: file(relativePath: { eq: "images/mongodb-logo.png" }) {
      id
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
