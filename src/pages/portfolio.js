import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

function Project(props) {
  return (
    <div
      className="project"
      style={{
        display: `grid`,
        gridTemplateColumns: `1fr auto`,
        gridGap: `10px`,
        padding: `5px`,
        borderBottom: `1px solid grey`,
      }}
    >
      <div>
        <h3>{props.title}</h3>
        <a href={props.github}>
          <p>Github Repo</p>
        </a>
        <a href={props.demo}>
          <p>Live Site</p>
        </a>
        {props.description}
        <h4>Built with</h4>
        {props.icons.map(icon => (
          <Img fixed={icon.childImageSharp.fixed} key={icon.id} />
        ))}
        {props.wideImage ? (
          <div>
            <Img fixed={props.wideImage.childImageSharp.fixed} />
            <br />
          </div>
        ) : null}
      </div>
      {props.data ? <Img fixed={props.data.childImageSharp.fixed} /> : null}
    </div>
  )
}

export default function Portfolio({ data }) {
  return (
    <Layout>
      <SEO title="My portfolio" />
      <Header headerText="My portfolio" />
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
        fixed(width: 600, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    js: file(relativePath: { eq: "images/js-icon.png" }) {
      id
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    webpack: file(relativePath: { eq: "images/webpack-logo.png" }) {
      id
      childImageSharp {
        fixed(width: 250, height: 100) {
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
