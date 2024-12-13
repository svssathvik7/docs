import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { sidebarItemsGenerator } from './sidebar';

const config: Config = {
  title: 'Garden Docs',
  tagline: 'Bringing bitcoin based assets to your dApp.',
  favicon: 'img/flower.svg',

  url: 'https://*.garden.finance',
  baseUrl: '/',

  organizationName: 'gardenfi',
  projectName: 'garden docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-docs',
      {
        routeBasePath: 'api',  // Adjust as per your setup
        sidebarPath: './sidebars.ts',
        sidebarItemsGenerator: sidebarItemsGenerator,
        editUrl: 'https://github.com/your-org/your-repo/edit/main/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarItemsGenerator: sidebarItemsGenerator,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
      appId: process.env.ALGOLIA_APP_ID,
      contextualSearch: true,
      searchPagePath: 'search',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/garden.svg',
    navbar: {
      logo: {
        alt: 'Garden logo',
        src: 'img/garden-docs.svg',
        srcDark: 'img/garden-docs-white.svg',
      },
      items: [
        {
          to: '/',
          type: 'doc',
          position: 'left',
          docId: 'home/get-started',
          label: 'Home',
        },
        {
          to: '/developers',
          type: 'doc',
          position: 'left',
          docId: 'developers/developers',
          label: 'Developers',
        },
        {
          href: 'https://github.com/catalogfi/garden.js',
          position: 'right',
          className: 'header-link header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://twitter.com/intent/follow?screen_name=garden_finance',
          position: 'right',
          className: 'header-link header-twitter-link',
          'aria-label': 'Twitter Handle',
        },
        {
          href: 'https://discord.com/invite/Fp4ZmZZrFu',
          position: 'right',
          className: 'header-link header-discord-link',
          'aria-label': 'Discord Server',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash'],
    },
    footer: {
      logo: {
        alt: 'Garden logo',
        src: 'img/garden.svg',
        srcDark: 'img/garden-white.svg',
      },
      links: [
        {
          title: 'Application',
          items: [
            { label: 'Swap', to: 'https://garden.finance/swap' },
            { label: 'Stake', to: 'https://garden.finance/stake' },
            { label: 'Leaderboard', to: 'https://garden.finance/leaderboard' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Blog', to: 'https://garden.finance/blog/' },
            { label: 'Audits', to: 'https://github.com/catalogfi/audits' },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            { label: 'Analytics', to: 'https://dune.com/garden_finance/gardenfinance' },
            { label: 'Explorer', to: 'https://main--symphonious-chaja-a69e12.netlify.app/' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', to: 'https://discord.com/invite/Fp4ZmZZrFu' },
            { label: 'Telegram', to: 'https://t.me/GardenTownhall' },
            { label: 'X', to: 'https://x.com/intent/follow?screen_name=garden_finance' },
          ],
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
