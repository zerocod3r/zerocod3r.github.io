import React from "react"
import { graphql } from "gatsby"
import Header from '../components/header'
import Footer from '../components/footer'
import "../components/layout.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (

    <section className="container">
    <div class="pull-left">
    <Header siteTitle="zerocoder.sh" />
    <article class="article-post">
      <section class="post-date">{frontmatter.date}
      </section>

      <h1>{frontmatter.title}</h1>
      <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </article>
    <Footer />
    </div>
    </section>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
