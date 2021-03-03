import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ElementsPage = ({ data }, location) => {
    const siteTitle = data.site.siteMetadata.title
  
    return (
      <Layout title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        /> 
  
        
      </Layout>
    )
  }