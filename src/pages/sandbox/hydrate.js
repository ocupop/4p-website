// /* eslint-disable react/prop-types */
// import React from 'react'
// import { graphql } from "gatsby"
// import { useSelector } from 'react-redux'
// import { useFirestoreConnect } from 'react-redux-firebase'

// const HydratePage = ({
//   data: {
//     allAuthor: {
//       edges: authors
//     }
//   }
// }) => {

//   // ----------------------
//   // RUNTIME DATA FETCHING
//   // ----------------------
//   useFirestoreConnect('quotes')
//   const quotes = useSelector(state => state.firestore.ordered.quotes)


//   return (
//     <>
//       <h1>Hydration Patterns</h1>
//       <hr />
//       <h4>Authors</h4>
//       <ul className="list-group">
//         {authors && authors.map(({ node }) => (
//           <li key={node.id} className="list-group-item">
//             {node.name}
//           </li>
//         ))}
//       </ul>
//       <hr />
//       <h4>Quotes</h4>
//       <ul className="list-group">
//         {quotes && quotes.map(quote => (
//           <li key={quote.id} className="list-group-item">
//             {quote.content}
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

// HydratePage.propTypes = {

// }

// // ----------------------
// // BUILD TIME DATA FETCHING USING GRAPHQL
// // ----------------------
// export const query = graphql`
//   {
//     allAuthor {
//       edges {
//         node {
//           id
//           name
//         }
//       }
//     }
//   }
// `

// export default HydratePage