
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/sarthak/projects/zerocod3r.github.io/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/sarthak/projects/zerocod3r.github.io/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/home/sarthak/projects/zerocod3r.github.io/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/home/sarthak/projects/zerocod3r.github.io/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/sarthak/projects/zerocod3r.github.io/src/pages/using-typescript.tsx")),
  "component---src-templates-blog-js": preferDefault(require("/home/sarthak/projects/zerocod3r.github.io/src/templates/blog.js"))
}

