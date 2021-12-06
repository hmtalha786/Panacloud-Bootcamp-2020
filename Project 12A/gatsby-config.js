const dotenv = require("dotenv");

dotenv.config();
let spaceIdValue;
let accessTokenValue;
// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
spaceIdValue = process.env.CONTENTFUL_SPACE_ID;
accessTokenValue = process.env.CONTENTFUL_ACCESS_TOKEN;
// } else {
// spaceIdValue=secrets.CONTENTFUL_SPACE_ID;
// accessTokenValue=secrets.CONTENTFUL_ACCESS_TOKEN
// }

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "gt2z1iv64oav",
        accessToken: "R-fyDGrqZI76UGL8tUqh9Nc3sq79GWwyR6eVd3X7X_8",
        forceFullSync: true,
      },
    },
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: process.env.apiKey,
          authDomain: process.env.authDomain,
          projectId: process.env.projectId,
          storageBucket: process.env.storageBucket,
          messagingSenderId: process.env.messagingSenderId,
          appId: process.env.appId,
          measurementId: process.env.measurementId,
        },
      },
    },
  ],
};
