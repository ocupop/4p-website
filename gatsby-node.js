// /* eslint-disable no-console */
// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

const path = require(`path`)
const matter = require(`gray-matter`);
const _ = require(`lodash`);



// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const standalonePages = await graphql(`
//     query {
//       allStandalonePage {
//         edges {
//           node {
//             id
//             title
//             permalink
//             layout
//           }
//         }
//       }
//     }
//   `).then(result => {
//     // Build Standalone Pages
//     result.data.allStandalonePage.edges.forEach(({ node }) => {
//       const component = path.resolve(`./src/templates/${node.layout}.jsx`)

//       createPage({
//         component,
//         path: node.permalink,
//         context: {
//           // Data passed to context is available in page queries as GraphQL variables.
//           id: node.id,
//         },
//       })
//     })
//   })
// }

exports.onCreateNode = async ({
  node,
  loadNodeContent,
  actions,
  createNodeId,
  reporter,
  createContentDigest
}) => {

  const { createNode, createParentChildLink, createNodeField } = actions

  // only log for Standalone Pages
  if (node.internal.mediaType !== `text/html` || node.name === '_defaults') {
    return
  }
  const nodeContent = await loadNodeContent(node)

  try {
    const file = matter(nodeContent);

    if (file.data) {
      file.data = _.mapValues(file.data, value => {
        if (_.isDate(value)) {
          return value.toJSON();
        }

        return value;
      })
    }

    let htmlNode = {
      id: createNodeId(`${node.id} >>> LocalContentSource`),
      children: [],
      parent: node.id,
      internal: {
        content: file.content,
        type: file.data.type
      }
    }

    htmlNode.frontmatter = Object.assign({ title: `` }, file.data)
    htmlNode.title = file.data.title
    // htmlNode.permalink = file.data.permalink
    // htmlNode.type = file.data.type
    htmlNode.htmlContent = file.content;

    if (node.internal.type === `File`) {
      htmlNode.fileAbsolutePath = node.absolutePath;
    }

    htmlNode.internal.contentDigest = createContentDigest(htmlNode);
    createNode(htmlNode);
    createParentChildLink({
      parent: node,
      child: htmlNode
    });

    return htmlNode;


  } catch (err) {
    reporter.panicOnBuild(`Error processing Store HTML ${node.absolutePath ? `file ${node.absolutePath}` : `in node ${node.id}`}:\n
      ${err.message}`);
    return {}; // eslint
  }

}