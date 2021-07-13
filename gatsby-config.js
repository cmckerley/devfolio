module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://mckerley.net`,
    // Your Name
    name: 'Christopher McKerley',
    // Main Site Title
    title: `Christopher McKerley | Office 365 Administrator | Systems Administrator`,
    // Description that goes under your name in main bio
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum.`,
    // Optional: Twitter account handle
    author: `@McticulousC`,
    // Optional: Github account URL
    github: `https://github.com/cmckerley`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/cmckerley/`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.Help desk Administrator, Service Technician, Field Service in a wide variety of technological applications. Particularly interested in PC Maintenance and Infrastructure Deployment as well as Software Deployment. Looking to learn more about Vituralization and Cloud Computing.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'NCEES',
        description: 'Systems Administrator, January 2020 - Present',
        link: 'https://ncees.org',
      },
      {
        name: 'NCEES',
        description: 'Helpdesk Administrator, January 2008 - January 2020',
        link: 'https://ncees.org',
      },
      {
        name: 'Nova Gaming LLC',
        description: 'Installation Technician, May 2007 - December 2007',
      },
      {
        name: 'Game Systems Inc.',
        description: 'Field Service Technician, May 2005 - May 2007',
      },      
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'html, CSS, Powershell',
      },
      {
        name: 'Databases',
        description: 'MySQL, MS-SQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), Azure',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
              wrapperStyle: `margin: 0 0 30px;`,
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
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
