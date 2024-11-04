import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Okulda Öğrenilen',
  tagline: 'Okulda öğrendiklerimizin ücretsiz arşivi',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ogrenilen.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ogrenilen', // Usually your GitHub org/user name.
  projectName: 'ogrenilen.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ogrenilen/ogrenilen.github.io',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ogrenilen/ogrenilen.github.io',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/okulda-ogrenillen-sosyal-kart.jpg',
    navbar: {
      title: 'OkuldaOgrenilen',
      logo: {
        alt: 'Okulda Ogrenilen Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'webTasarimi',
          position: 'left',
          label: 'Web Tasarımı',
        },
        {
          type: 'docSidebar',
          sidebarId: 'algoritmaVeProgramlama',
          position: 'left',
          label: 'Algoritma ve Programlama',
        },
        {
          type: 'docSidebar',
          sidebarId: 'temelBilgiTeknolojileri',
          position: 'left',
          label: 'TBT',
        },
        {to: '/tum-dersler', label: 'Tüm Dersler', position: 'left'},
        {
          href: 'https://github.com/ogrenilen/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dersler',
          items: [
            {
              label: 'Tüm Dersler',
              to: '/tum-dersler',
            },
          ],
        },
        {
          title: 'Sosyal',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/acanisik',
            },
          ],
        },
        {
          title: '...ve Daha Fazlası',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ogrenilen',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OkuldaOgrenilen, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
