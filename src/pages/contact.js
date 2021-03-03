import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contactar"
        keywords={[`contactar`, `birds`, `friends`, `aves`]}
      />
      <div className="contactar">
        <h3>Contactar con Birds Friends</h3>
        <p>
          Puedes contactar con nosotros a través de{" "}
          <a href="mailto:birdsfriends.m@gmail.com" title="Email">
            email
          </a>
          , <br />o bien a través de nuestres redes sociales{" "}
          <a
            href="https://www.facebook.com/asociacionbirdsfriends/"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          e{" "}
          <a
            href="https://www.instagram.com/asociacion.birds_friends_/"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
