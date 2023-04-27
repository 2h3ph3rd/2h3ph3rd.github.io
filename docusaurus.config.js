// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Francesco Pastore',
  tagline: 'My personal website',
  favicon: '/img/favicon.ico',

  url: 'https://2h3ph3rd.github.io',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: '2h3ph3rd',
  projectName: '2h3ph3rd.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Francesco Pastore',
        logo: {
          alt: 'Logo',
          src: 'images/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'securitySidebar',
            position: 'left',
            label: '🔒 Security',
          },
          {
            type: 'docSidebar',
            sidebarId: 'writeupsSidebar',
            position: 'left',
            label: '📝 Writeups',
          },
          {
            href: '/resources',
            label: '🔗 Resources',
            position: 'left',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/2h3ph3rd/2h3ph3rd.github.io',
            label: 'Source',
            position: 'right',
          },
          {
            href: 'https://github.com/2h3ph3rd',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://2h3ph3rd.medium.com',
            label: 'Medium',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Security',
        //         to: '/docs/security',
        //       },
        //       {
        //         label: 'University',
        //         to: '/docs/university',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Made with ❤️ using <a href="https://docusaurus.io" target="_blank">Docusaurus</a> and <a href="https://infima.dev" target="_blank">Infima</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
}

module.exports = config
