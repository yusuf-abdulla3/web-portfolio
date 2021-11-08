module.exports = {
  
  siteMetadata: {
    // Links to your social networks:
    social: [
      {
        url: 'https://github.com/yusuf-abdulla3',
        name: 'GitHub'
      }
    ]
  },
 
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
   
    {
      resolve: `gatsby-theme-contact`,
      options: {
        contactPath: '/contact',
        successPath: '/thanks'
      }
    },
   
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/", { regex: "^/blog" }],
        excludePaths: ["/blog/beep-beep-lettuce"],
        height: 3,
        prependToBody: false,
        color: `#8B0000`,
        footerHeight: 500,
      }
    },
    
  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
   
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      }
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/YA.png',
      },
    },
    
  ],
};
