const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const post = path.resolve("src/templates/index.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `).then(result => {
    // console.log(result.data)
    const projects = result.data.allMarkdownRemark.edges

    projects.forEach(({ node }) => {
      const { frontmatter } = node

      createPage({
        path: frontmatter.path,
        component: post,
        context: {
          path: frontmatter.path,
        },
      })
    })
  })
}
