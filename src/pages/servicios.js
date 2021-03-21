import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/css/screen.css"

const ServiciosPage = ({ data }, location) => {
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
            Conoce nuestros Servicios. Conoce el impacto de Birds Friends.
          </h2>
          <figure className="kg-card kg-image-card kg-width-wide">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <ul>
            <li>
              Asesoramiento directo y gratuito a todo aquel que encuentre o
              necesite ayudar a un ave (sin importar su especie).
            </li>
            <li>
              Rescates, acogidas, adopciones y reubicaciones para aves y otros
              animales que lo precisen. En especial las especies que carecen de
              protección, como las aves domésticas, de granja, cinegéticas,
              exóticas, irrecuperables... ya sean encontradas o procedentes de
              particulares o abandonos.
            </li>
            <li>Recuperación de aves y otros animales.</li>
            <li>Liberación de aves recuperadas.</li>
            <li>
              Difusión y búsqueda de aves y otros animales domésticos perdidos.
              Búsqueda -en el caso de los que se encuentran- de su familia.
            </li>
            <li>Proyectos de conservación de Fauna y Flora.</li>
            <li>
              Asesoramiento y consultas gratuitas para los propietarios de aves
              que lo necesiten, sobre: cuidado, nutrición y etología con el fin
              de que todos los animales puedan recibir los cuidados necesarios
              en sus hogares.
            </li>
            <li>
              Talleres y charlas con temáticas diversas sobre respeto animal,
              concienciación, fabricación de cajas nido, fabricación de juguetes
              para aves, terapia con animales, reforestación, cursos, etc.
            </li>
            <li>Charlas educativas en colegios.</li>
            <li>
              Salidas ornitológicas (se enseña a observar y conocer a las
              distintas aves del entorno).
            </li>
            <li>
              Tramitación de denuncias, contra irregularidades en cuanto a la
              protección animal.
            </li>
            <li>Ferias y Talleres.</li>
            <li>
              En estos momentos disponemos de un espacio físico cedido (a 200 km
              de Barcelona) para los animales rescatados, pero estamos
              trabajando para tener un refugio más cercano.
            </li>
          </ul>
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
      <ServiciosPage location={props.location} data={data} {...props} />
    )}
  />
)
