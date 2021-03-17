import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AdoptarPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Asociacion"
        keywords={[`aves`, `asociacion`, `ong`, `barcelona`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Nuestra política de adopción.</h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="historia">Adoptar con Responsabilidad</h3>
          <p>
            Nuestra política de trabajo en "Birds Friends", se basa en la
            creencia de que toda vida tiene derecho a ser libre y no ser poseída
            por nada ni por nadie, y todos nuestros esfuerzos en la protección
            aviar y animal, va dirigido a ello.
          </p>
          <p>
            No obstante, necesitamos de adoptantes adecuados para muchas de las
            aves (y otros animales) que acogemos y rescatamos, y que por
            diferentes motivos, no pueden volver a su medio natural (por
            ejemplo: animales exóticos, de granja, domésticas, irrecuperables,
            enfermos crónicos, o animales improntados que desde crías viven en
            casas y no sabrían desenvolverse en su medio natural, ya que lo que
            buscan es el contacto humano, etc...) Estas son algunas de las
            situaciones en las que necesitamos adoptantes, pero cada animal es
            un mundo y cada animal necesita una familia y un hogar concreto.
          </p>
          <p>
            Es por todo esto que necesitamos adoptantes responsables, que
            entiendan lo que es incluir una vida en sus propias vidas y que va a
            depender de ellos. Que puedan permitirse económicamente, el gasto de
            añadir un miembro más a la familia y que puedan tener los
            conocimientos, el espacio y los cuidados adecuados, para la especie
            que van a adoptar.
          </p>
          <p>
            Aunque en nuestro Facebook e Instagram, podréis ir viendo las
            entradas y adopciones de animales, si estáis pensando en adoptar,
            por favor, rellenar la solicitud de adopción, que añadimos más
            abajo. Es muy importante para nosotros, que todos los campos sean
            rellenados, ya que gracias a ello, podremos saber que animal te
            interesa y si das el perfil apto para las condiciones que requiere,
            o en su defecto, tener tu contacto para próximas entradas.
          </p>
          <p>
            No todos los animales que podéis ver en nuestras redes sociales se
            dan en adopción, por ciertas circunstancias algunos de ellos son
            residentes en nuestro refugio y parte de nuestra familia Birds
          </p>
          <p>
            Sólo se entrega en adopción a personas mayores de edad, bajo
            contrato de adopción, recogida en mano y con aceptación de Pre y
            Post-seguimiento, de la misma adopción, por parte de los miembros de
            nuestra asociación. También pueden adoptar santuarios, refugios,
            núcleos zoológicos, centros de protección.. no es solo para
            particulares.
          </p>
          <p>
            No se cuelgan fotos de animales en forma de blog porque consideramos
            que no es justo para ellos una adopción "a la carta", si estás
            interesado en adoptar de una especie en concreto puedes indicarlo.
          </p>
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
      <AdoptarPage location={props.location} data={data} {...props} />
    )}
  />
)
