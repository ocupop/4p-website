const proxy = require('http-proxy-middleware')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `4pFoods Website`,
    description: `Enter in default site meta description...`,
    lang: `en`,
    author: `@ocupop`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['content/_scss'],
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/img`,
        name: 'images',
      },
    },
    // maintain jekyll build, but pull it in as a datasource
    // but mainitain medoa types
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'pages',
    //     path: `${__dirname}/content`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'ui',
    //     path: `${__dirname}/content/_includes/ui`,
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'farmers',
    //     path: `${__dirname}/content/_farmers`,
    //   },
    // },

    // Getting pages
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: 'https://cms.4pfoods.com/api/pages',
        // imageKeys: ["images"],
        rootKey: 'pages',
        schemas: {
          pages: `
            layout: String
            title: String
            meta: meta
            footer_image: String
            content: String
            _assets: assets
          `,
          meta: `
            description: String
            image: String
          `,
          assets: `
            image: String
          `,
        },
      },
    },

    // Getting Farmers
    // {
    //   resolve: 'gatsby-source-custom-api',
    //   options: {
    //     url: 'https://cms.4pfoods.com/api/farmers.json',
    //     // imageKeys: ["images"],
    //     rootKey: 'farmers',
    //     schemas: {
    //       farmers: `
    //         farmerId: String
    //         output: String
    //         layout: String
    //         title: String
    //       `,
    //       options:`
    //         image: uploadsDir
    //         featured_image: uploadsDir
    //       `,
    //       uploadsDir:`
    //         uploads_dir: String
    //       `
    //     },
    //   },
    // },

    // Getting Events
    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //     url: "https://cms.4pfoods.com/api/events.json",
    //     // imageKeys: ["images"],
    //     rootKey: "events",
    //     schemas: {
    //       pages: `
    //         title: String
    //       `
    //     }
    //   }
    // },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: {
          type: process.env.FIREBASE_TYPE,
          project_id: process.env.FIREBASE_PROJECT_ID,
          private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
          private_key: process.env.FIREBASE_PRIVATE_KEY,
          client_email:process.env.FIREBASE_CLIENT_EMAIL,
          client_id:process.env.FIREBASE_CLIENT_ID,
          auth_uri:process.env.FIREBASE_AUTH_URI,
          token_uri:process.env.FIREBASE_TOKEN_URI,
          auth_provider_x509_cert_url:process.env.FIREBASE_PROVIDER_X509_CERT_URL,
          client_x509_cert_url:process.env.FIREBASE_X509_CERT_URL,
        },
        databaseURL:process.env.FIREBASE_DATABASE_URL,
        types: [
          {
            type: 'Products',
            collection: 'products',
            path: 'product/products1',
            map: doc => ({
              category: doc.category,
              department: doc.department,
              // author___NODE: doc.author.id,
            }),
          },
        ],
      },
    },
    {
      resolve: 'gatsby-theme-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
        socialLogins: ['google', 'facebook', 'github'],
      },
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
        icon: `content/img/4p-foods-logo-color.png`, // This path is relative to the root of the site.
      },
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
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    )
  },
}
