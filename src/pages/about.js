import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />

    <article>
    <div
          className="blog-post-content">
      <h1>Hi.</h1>

      <p>I&rsquo;m Sarthak, but you&rsquo;ll often find me as <strong>zerocod3r</strong>,
                        on the Internet. I currently work as a Software Engineer.
                    </p>

      <p>Here&rsquo;s a list of things that I&rsquo;m interested in, or care deeply about
                        (also serve as good conversation starters if you want to talk to me!):</p>

      <ul>
        <li>Softwares

                            <ul>
            <li>Web frameworks</li>
            <li>Python automation</li>
            <li>Backend development</li>
            <li>Front end development</li>
          </ul>
        </li>
        <li>privacy

                            <ul>
            <li>secure communications</li>
            <li>operational security</li>
            <li>anti-surveillance</li>
          </ul>
        </li>
        <li>free software</li>
        <li>Alternate music

                            <ul>
            <li>alternate rock</li>
            <li>deep house</li>
          </ul>
        </li>
        <li>fps games

                            <ul>
            <li>Valorant</li>
            <li>Apex Legends</li>
          </ul>
        </li>
      </ul>

      <p>Here are some of my links:</p>

      <ul>
        <li><a href="https://github.com/zerocod3r" rel="nofollow">GitHub</a></li>
      </ul>

      <h2>contact</h2>

      <p>Send mail to <a href="mailto:zerocod3r@protonmail.com" rel="nofollow">zerocod3r@protonmail.com</a>. I welcome you to reach out to me, even if it&rsquo;s
                        just
                        to say hi! I always reply.
                    </p>

      <p>I don&rsquo;t really care about site traffic/analytics, and I never will;
                        I am not interested in who is reading and I respect your privacy.</p>
    </div>
    </article>
  </Layout>
)

export default IndexPage
