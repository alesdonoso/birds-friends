import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ColaboraPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Asociacion"
        keywords={[`aves`, `asociacion`, `protectora`, `barcelona`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>
            Puedes colaborar con nosotros de muchas formas. ¡Ayúdanos a crear un
            mundo mejor!
          </h2>
          <div className="colaborar-cards">
            <Link className="card" to="/darkness">
              Prueba 1
            </Link>
            <Link className="card" to="/about">
              Prueba 1
            </Link>
            <Link className="card" to="/about">
              Prueba 1
            </Link>
          </div>
        </div>
      </article>
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
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ColaboraPage location={props.location} data={data} {...props} />
    )}
  />
)
