// /* eslint-disable no-console */
// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */
const path = require(`path`)
// const matter = require(`gray-matter`)
// const _ = require(`lodash`)
// const slugify = require('slugify')


exports.onCreateWebpackConfig = ({
  stage,
  actions,
  getConfig
}) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat(function (context, request, callback) {
        const regex = /^@?firebase(\/(.+))?/;
        // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
        if (regex.test(request)) {
          return callback(null, `umd ${request}`);
        }
        callback();
      })
    });
  }
};

// ------------------------
// CREATE PAGES
// ------------------------
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // TODO: determine better pattern
  await graphql(`
    query {
      allPages {
        edges {
          node {
            id
            pageUrl
            layout
          }
        }
      }
    }
  `).then(result => {
    // Build Web Pages
    result.data.allPages.edges.forEach(({ node: { layout, pageUrl, id } }) => {
      const component = path.resolve(`./src/templates/${layout}.jsx`)

      // TODO: Add solution for different Gatsby layouts
      // const layout = node.layout === 'splash' ? 'splash' : 'index'

      createPage({
        component,
        path: pageUrl,
        context: {
          id,
        },
      })
    })
  })

  // getting farmers...
  //   await graphql(`
  //   query {
  //     allFarmers {
  //       edges {
  //         node {
  //           id
  //         }
  //       }
  //     }
  //   }
  // `).then(result => {
  //   // Build Web Pages
  //   result.data.allPages.edges.forEach(({ node: { layout, pageUrl, id } }) => {
  //     const component = path.resolve(`./src/templates/${layout}.jsx`)

  //     // TODO: Add solution for different Gatsby layouts
  //     // const layout = node.layout === 'splash' ? 'splash' : 'index'

  //     createPage({
  //       component,
  //       path: pageUrl,
  //       context: {
  //         id
  //       },
  //     })
  //   })
  // })

  // build out products
  await graphql(`
    query {
      allProduct {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    // Build Web Pages
    result.data.allProduct.edges.forEach(({ node: { id } }) => {
      createPage({
        component: path.resolve(`./src/templates/product.jsx`),
        path: `products/${id}`,
        context: {
          id,
        },
      })
    })
  })
}

// exports.createPages = async ({ graphql, actions }) => {
// console.log("this was run")
// }


// ------------------------
// ON CREATE NODES
// ------------------------

// exports.onCreateNode = async (props) => {

//   const {
//     node,
//     loadNodeContent,
//     actions,
//     createNodeId,
//     reporter,
//     createContentDigest
//   } = props

//   const { createNode, createParentChildLink } = actions

//   // only log for Standalone Pages

//   // what is a media type
//   // image, json (contenttype:json)
//   if (node.internal.mediaType !== `text/html` || node.name === '_defaults') {
//     return
//   }

//   const nodeContent = await loadNodeContent(node)

//   try {
//     const file = matter(nodeContent);

//     if (file.data) {
//       file.data = _.mapValues(file.data, value => {
//         if (_.isDate(value)) {
//           return value.toJSON();
//         }

//         return value;
//       })
//     }

//     const htmlNode = {
//       id: createNodeId(`${node.id} >>> LocalContentSource`),
//       children: [],
//       parent: node.id,
//       internal: {
//         content: file.content,
//         // type: file.data.content_type
//         type: `PageElements`
//       }
//     }

//     htmlNode.frontmatter = file.data
//     htmlNode.title = file.data.title
//     htmlNode.layout = file.data.layout
//     htmlNode.htmlContent = file.content;

//     if (node.internal.type === `File`) {
//       htmlNode.fileAbsolutePath = node.absolutePath;
//     }

//     htmlNode.internal.contentDigest = createContentDigest(htmlNode);
//     createNode(htmlNode);
//     createParentChildLink({
//       parent: node,
//       child: htmlNode
//     });

//     return htmlNode;

//   } catch (err) {
//     reporter.panicOnBuild(`Error processing Store HTML ${node.absolutePath ? `file ${node.absolutePath}` : `in node ${node.id}`}:\n
//       ${err.message}`);
//     return {}; // eslint
//   }

// }
