/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from "gatsby"
import _ from 'lodash'
import parse from 'html-react-parser';
import FooterHero from '../components/ui/FooterHero'

const pageComponents = {
  // TODO: Import and list all acceptable components that may get included inline page content.
}

const parseOptions = {
  replace: ({ attribs, name }) => {
    if (!attribs) return;

    if (name.includes('-')) {
      const component = _.upperFirst(_.camelCase(name))
      return React.createElement(pageComponents[component], attribs)
    }
  }
}


const PageTemplate = ({
  // data: {
  //   contentPage: {
  //     htmlContent,
  //     frontmatter: {
  //       footer_image
  //     }
  //   }
  // }
 }) => {

  return (
    <>
      {parse(htmlContent, parseOptions)}
      <section className="p-0">
        <FooterHero image={footer_image}/>
      </section>
    </>
  )
}


// export const query = graphql`
//   query($id: String!) {
//     contentPage(id: {eq: $id }) {
//       title
//       htmlContent
//       frontmatter {
//         footer_image
//       }
//     }
//   }`

export default PageTemplate
