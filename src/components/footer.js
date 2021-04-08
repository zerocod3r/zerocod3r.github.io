import * as React from "react"
import ccimg from "../images/cc.svg"
import github from "../images/github.png"


const Footer = ({ siteTitle }) => (
    <footer>
        <section class="icons">
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                <img class="footimgs" alt="cc nc-by-sa" src={ccimg} /></a>
            <a href="https://github.com/zerocod3r" target="_blank"><img class="footimgs" alt="github" src={github} /></a>
            {/* <a href="https://webring.xxiivv.com/#random" target="_blank"><img src="https://webring.xxiivv.com/icon.white.svg" /></a> */}
        
    </section>
</footer>
)

export default Footer
