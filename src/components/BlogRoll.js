import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <table>
        {posts && posts.map(({ node: post }) => (
        <tbody>
        <tr>
          <td align="left" class="index-post">
            <Link className="title has-text-primary is-size-4"
                  to={post.frontmatter.path}>
                      {post.frontmatter.title}
            </Link>
          </td>
          <td align="right" class="index-date">{post.frontmatter.date}</td>
        </tr>
        </tbody>
        )
        )}
          
      </table>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)