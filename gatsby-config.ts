import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio-shaju-pd`,
    siteUrl: `https://www.codewithshaju.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        // String value for your clarity project ID
        clarity_project_id: "i6w4tk1und",
        // Boolean value for enabling clarity while developing
        // true will enable clarity tracking code on both development and production environments
        // false will enable clarity tracking code on production environment only
        enable_on_dev_env: true
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-S46VYN71L0",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-S46VYN71L0", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      },
    },
    //   {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     "accessToken": "",
    //     "spaceId": ""
    //   }
    // },
    "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-sitemap", "gatsby-plugin-react-helmet", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }]
};

export default config;
