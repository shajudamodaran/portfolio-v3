import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio-shaju-pd`,
    siteUrl: `https://www.yourdomain.tld`
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
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 0,
          // Enables Google Optimize using your container Id
          optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
          // Enables Google Optimize Experiment ID
          experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
          // Set Variation ID. 0 for original 1,2,3....
          variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
          // Defers execution of google analytics script after page load
          defer: false,
          // Any additional optional fields
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          cookieDomain: "codewithshaju.com",
          // defaults to false
          enableWebVitalsTracking: true,
        }
      },
  //   {
  //   resolve: 'gatsby-source-contentful',
  //   options: {
  //     "accessToken": "",
  //     "spaceId": ""
  //   }
  // },
   "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-sitemap","gatsby-plugin-react-helmet", {
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
