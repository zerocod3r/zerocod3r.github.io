import React from 'react'
import BlogRoll from '../components/BlogRoll'
import Layout from '../components/layout'
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <React.Fragment>
        <section>
          <div className="content">
            <BlogRoll />
          </div>
        </section>
      </React.Fragment>
      <p><em><b>Note</b>: These are my opinions on things happening around.</em></p>
    </Layout>)
}