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

const SocialLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <a href={props.to}>{props.children}</a>
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
          <ListLink to="/about">About</ListLink>
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
        <ul style={{ listStyle: `none`, float: `right` }}>
          <SocialLink to="https://github.com/barrysweeney">
            <FaGithub />
          </SocialLink>
          <SocialLink to="https://twitter.com/barrysweeneydev">
            <FaTwitter />
          </SocialLink>
          <SocialLink to="https://www.linkedin.com/in/barry-sweeney-819022189/">
            <FaLinkedin />
          </SocialLink>
          <SocialLink to="https://stackoverflow.com/users/story/9472445">
            <FaStackOverflow />
          </SocialLink>
        </ul>
        <GatsbyLogo />
      </footer>
    </div>
  )
}
