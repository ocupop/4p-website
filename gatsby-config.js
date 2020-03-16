const proxy = require('http-proxy-middleware')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `4pFoods Website`,
    description: `Enter in default site meta description...`,
    lang: `en`,
    author: `@ocupop`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['content/_scss']
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/img`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js'
      }
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
      }
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
      }
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCAO2do5V-Ea98ilA49coabv_hShNnH6RU&libraries=places'
      }
    },


    // Getting UI Elements

    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: `${process.env.CMS_BASE_URL}/api/ui.json`,
        // imageKeys: ["images"],
        rootKey: 'elements',
        schemas: {
          elements: `
            slug: String!
            output: String!
          `
        }
      }
    },
    // Getting pages
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: `${process.env.CMS_BASE_URL}/api/pages.json`,
        // imageKeys: ["images"],
        rootKey: 'pages',
        schemas: {
          pages: `
            layout: String
            title: String
            content: String
          `
        }
      }
    },
    // Getting Farmers
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: `${process.env.CMS_BASE_URL}/api/farmers.json`,
        rootKey: 'farmers',
        schemas: {
          farmers: `
            output: String
            url: String
            layout: String
            title: String
            slug: String
            date: String
            vendorID: String
          `
        }
      }
    },
    // Getting Events
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: `${process.env.CMS_BASE_URL}/api/events.json`,
        rootKey: 'events',
        schemas: {
          events: `
            output: String
            url: String
            layout: String
            title: String
            slug: String
            date: String
          `
        }
      }
    },
    // Getting Posts
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: `${process.env.CMS_BASE_URL}/api/posts.json`,
        rootKey: 'posts',
        schemas: {
          posts: `
            output: String
            url: String
            layout: String
            title: String
            post_date: String
            date: String
            slug: String
          `
        }
      }
    },
    // Getting Team
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: `${process.env.CMS_BASE_URL}/api/team.json`,
        rootKey: 'team',
        schemas: {
          team: `
            output: String
            url: String
            layout: String
            title: String
            slug: String
            date: String
          `
        }
      }
    },
    // Getting Careers
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: `${process.env.CMS_BASE_URL}/api/careers.json`,
        rootKey: 'careers',
        schemas: {
          careers: `
            output: String
            url: String
            layout: String
            title: String
            slug: String
            date: String
          `
        }
      }
    },
    // Getting content from firestore
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: {
          type: process.env.GATSBY_FIREBASE_TYPE,
          project_id: process.env.GATSBY_FIREBASE_PROJECT_ID,
          private_key_id: process.env.GATSBY_FIREBASE_PRIVATE_KEY_ID,
          private_key: process.env.NETLIFY
            ? JSON.parse(process.env.GATSBY_FIREBASE_PRIVATE_KEY)
            : process.env.GATSBY_FIREBASE_PRIVATE_KEY,
          client_email: process.env.GATSBY_FIREBASE_CLIENT_EMAIL,
          client_id: process.env.GATSBY_FIREBASE_CLIENT_ID,
          auth_uri: process.env.GATSBY_FIREBASE_AUTH_URI,
          token_uri: process.env.GATSBY_FIREBASE_TOKEN_URI,
          auth_provider_x509_cert_url: process.env.GATSBY_FIREBASE_PROVIDER_X509_CERT_URL,
          client_x509_cert_url: process.env.GATSBY_FIREBASE_X509_CERT_URL
        },
        databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
        // appConfig: {
        //   apiKey: process.env.GATSBY_FIREBASE_API_KEY,
        //   authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
        //   databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
        //   projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
        //   storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
        //   messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
        //   appID: process.env.GATSBY_FIREBASE_APP_ID,
        //   measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID
        // },
        types: [
          {
            type: 'Product',
            collection: 'products',
            map: doc => ({
              name: doc.name,
              category: doc.category ? doc.category.label : '',
              department: doc.department ? doc.department.label : '',
              ingredients: doc.ingredients,
              storageTips: doc.storageTips,
              tags: doc.tags,
              variants: doc.variants,
              vendor___NODE: doc.vendor ? doc.vendor.value : ''
            })
          },
          {
            type: 'Vendor',
            collection: 'vendors',
            map: doc => ({
              name: doc.name,
              description: doc.description,
              website: doc.website,
              location: doc.location,
              logo: doc.logo,
              featuredImage: doc.vendorImages ? doc.vendorImages[0] : {}
            })
          }
          // {
          //   type: 'Quote',
          //   collection: 'quotes',
          //   map: doc => ({
          //     content: doc.content,
          //     author___NODE: doc.author.value,
          //   }),
          // },
          // {
          //   type: 'Author',
          //   collection: 'authors',
          //   map: doc => ({
          //     name: doc.name,
          //   }),
          // },
        ]
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/img/4p-foods-logo-color.png` // This path is relative to the root of the site.
      }
    },

    // {
    //   resolve: 'gatsby-source-google-sheets',
    //   options: {
    //     spreadsheetId: 'get this from the sheet url',
    //     worksheetTitle: 'ie the name in the worksheet tab',
    //     credentials: require('./path-to-credentials-file.json')
    //   }
    // },

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: "example.com",
    //   },
    // },

    // {
    //   resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
    //   options: {
    //     develop: true, // Activates purging in npm run develop
    //     purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
    //   },
    // }, // must be after other CSS plugins

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': ''
        }
      })
    )
  }
}
