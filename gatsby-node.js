/* eslint-disable no-console */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      allProduct {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    const shopifyProducts = result.data.allShopifyProduct.edges
    const firestoreProducts = result.data.allProduct.edges
    const posts = result.data.allMarkdownRemark.edges

    shopifyProducts.forEach(({ node }) => {
      createPage({
        path: `/shopify/${node.handle}/`,
        component: path.resolve(`./src/features/shopify/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })

    firestoreProducts.forEach(({ node }) => {
      createPage({
        path: `/firestore/${node.id}/`,
        component: path.resolve(`./src/features/firestore/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          // handle: node.handle,
          id: node.id,
        },
      })
    })

    posts.forEach(({ node }) => {
      const { id, fields, frontmatter } = node
      createPage({
        path: fields.slug,
        tags: frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }


}


