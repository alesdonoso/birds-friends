import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Asociación Protectora de Aves"
        keywords={[`aves`, `protectora`, `barcelona`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
          <br />
          <p className="page-head-subtitle">
            Somos una asociación sin ánimo de lucro, dedicada al proteccionismo
            animal y en especial a las aves, una de las especies, que en la
            actualidad, menos empatización y respeto recibe, en comparación con
            otras especies de animales, como los perros o los gatos y sin
            embargo siendo uno de los más maltratados, tanto por la industria
            cárnica, como por el comercio, la caza, el abandono, la pérdida de
            su hábitat, etc. 
            
            <br/><br/>Debido al bajo interés que presenta su protección y
            las pocas asociaciones que velan por sus derechos, nace: "Birds
            Friends". "Birds Friends" sólo es ese granito de arena, que con la
            unión de varias personas, puede hacer una gran montaña.
          </p>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
