import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  
    <div className="content">
  <header>
    <a href="/">
      <span id="terminal"><span class="Typewriter__wrapper">&gt; zerocod3r.sh</span><span class="Typewriter__cursor">|</span></span>
    </a>
    <nav>
      <a href="/about">about</a>
    </nav>

  </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
