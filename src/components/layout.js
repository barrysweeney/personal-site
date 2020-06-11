import React from "react"
import { Link } from "gatsby"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa"
import GatsbyLogo from "./gatsbyLogo"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 700,
        padding: `1rem 1rem`,
        minHeight: `100vh`,
        display: `grid`,
        gridTemplateRows: `auto auto 1fr auto`,
        background: `white`,
      }}
    >
      <header style={{ marginBottom: `1.5rem` }}>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/experience">Experience</ListLink>
          <ListLink to="/portfolio/">Portfolio</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <div>{children}</div>
      <footer
        style={{ gridRow: 4, borderTop: `1px solid grey`, padding: `10px` }}
      >
        <a href="https://github.com/barrysweeney">
          <FaGithub />
        </a>

        <a href="https://twitter.com/barrysweeneydev">
          <FaTwitter />
        </a>

        <a href="https://www.linkedin.com/in/barry-sweeney-819022189/">
          <FaLinkedin />
        </a>

        <a href="https://stackoverflow.com/users/story/9472445">
          <FaStackOverflow />
        </a>

        <GatsbyLogo />
      </footer>
    </div>
  )
}
