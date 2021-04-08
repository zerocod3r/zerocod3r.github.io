import React from 'react'

import BlogRoll from '../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div className="content">
            <BlogRoll />
          </div>
      </React.Fragment>
    )
  }
}