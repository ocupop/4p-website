// /* eslint-disable no-console */
// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

const path = require(`path`);
const matter = require(`gray-matter`);
const _ = require(`lodash`);
const slugify = require('slugify');



// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // TODO: determine better pattern
//   const pages = await graphql(`
//     query {
//       allContentPage {
//         edges {
//           node {
//             id
//             title
//             layout
//           }
//         }
//       }
//     }
//   `).then(result => {
//     // Build Web Pages
//     result.data.allContentPage.edges.forEach(({ node }) => {
//       let slug = '/'
//       const component = path.resolve(`./src/templates/${node.layout}.jsx`)
//       if (node.layout !== 'homepage') {
//         slug = slugify(node.title, {
//           remove: /[*+~.()'"!:@]/g,
//           lower: true
//         })
//       }

//       // TODO: Add solution for different Gatsby layouts
//       // const layout = node.layout === 'splash' ? 'splash' : 'index'


//       createPage({
//         component,
//         path: slug,
//         context: {
//           // Data passed to context is available in page queries as GraphQL variables.
//           id: node.id,
//         },
//       })
//     })
//   })

// }


// exports.onCreateNode = async ({
//   node,
//   loadNodeContent,
//   actions,
//   createNodeId,
//   reporter,
//   createContentDigest
// }) => {

//   const { createNode, createParentChildLink } = actions

//   // only log for Standalone Pages
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