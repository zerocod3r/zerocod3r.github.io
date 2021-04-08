/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import Helmet from "react-helmet"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <section className="container">
    <div class="pull-left">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
      <Footer />
      </div>
      </section>
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        <script src={withPrefix('script.js')} type="text/javascript" />
      </Helmet>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
