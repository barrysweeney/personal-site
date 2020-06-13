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
        title="Topify"
        data={data.topify}
        github="https://github.com/barrysweeney/topify/"
        demo="https://clever-lamport-50d143.netlify.app/"
        description={
          <div>
            React App using the Spotify Web API that lets you:
            <ul>
              <li>View your top artist and track</li>
              <li>
                Search for and play 30 second previews of artists, tracks,
                albums, playlists, shows, and episodes
              </li>
              <li>View your library of albums and playlists</li>
              <li>Create new playlists with a custom cover image</li>
            </ul>
          </div>
        }
        icons={[data.react, data.node]}
      />
      <Project
        title="Topbook"
        data={data.topbook}
        github="https://github.com/barrysweeney/TOPBOOK"
        demo="https://calm-falls-42453.herokuapp.com/"
        description={
          <div>NodeJS social media app with passport-github authentication</div>
        }
        icons={[data.node, data.mongodb]}
      />
      <Project
        title="Nuclear Decay Simulation"
        github="https://github.com/barrysweeney/decay"
        demo="https://barrysweeney.github.io/decay/"
        description={
          <div>
            Visualizing the decay of radioactive nucleons as a function of both
            time and the decay probability using Chart.js
          </div>
        }
        icons={[data.js]}
        wideImage={data.decay}
      />
      <Project
        title="Battleship"
        github="https://github.com/barrysweeney/battleship"
        demo="https://barrysweeney.github.io/battleship/"
        description={<div>Single player battleship game</div>}
        icons={[data.js, data.webpack]}
        data={data.battleship}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    topify: file(relativePath: { eq: "images/topify-app.png" }) {
      id
      childImageSharp {
        fixed(width: 200, height: 400) {
          ...GatsbyImageSharpFixed
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
    decay: file(relativePath: { eq: "images/decay-app.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    js: file(relativePath: { eq: "images/js-icon.png" }) {
      id
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    webpack: file(relativePath: { eq: "images/webpack-logo.png" }) {
      id
      childImageSharp {
        fixed(width: 210, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    battleship: file(relativePath: { eq: "images/battleship-app.png" }) {
      id
      childImageSharp {
        fixed(width: 290, height: 430) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
