/**
 * Gatsby 사이트 구성 옵션은 본 파일에 정의함 - https://www.gatsbyjs.org/docs/gatsby-config/#
 * 1. siteMetadata - 사이트 전반의 공통 데이터를 정의 합니다.
 * 2. plugins - gatsby api를 구현하는 node.js 패키지
 * 3. pathPrefix
 * 4. polyfill - 낡은 브라우저에서 모던 코드를 쓸수 있도록 도와줌
 * 5. mapping
 * 6. proxy
 * 7. developMiddleware
 *
 * @type {{siteMetadata: {title: string, author: string, description: string, siteUrl: string, social: {twitter: string}}, plugins: *[]}}
 */
module.exports = {
  siteMetadata: {
    title: `Jenson Starter Blog`,
    author: `Jenson.lee`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `kakaopay`,
      facebook: `kakaopay`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ]
}
