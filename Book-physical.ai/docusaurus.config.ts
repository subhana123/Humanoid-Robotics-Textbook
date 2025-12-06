import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Humanoid Robotics Textbook',
  tagline: 'Physical AI — Robotics for Everyone',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-site.vercel.app',
  baseUrl: '/',

  organizationName: 'subhana123',
  projectName: 'Humanoid-Robotics-Textbook',

  onBrokenLinks: 'ignore',      // IMPORTANT: prevent build crash
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Humanoid Robotics',
      logo: {
        src: 'img/ph-ai-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'TextBook',
        },
        {
          href: 'https://github.com/subhana123/Humanoid-Robotics-Textbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'TextBook',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com' },
            { label: 'Discord', href: 'https://discord.com' },
            { label: 'X', href: 'https://x.com' },
          ],
        },
        {
          title: 'More',
          items: [
            // ❌ Removed Blog link (because blog disabled)
            {
              label: 'GitHub',
              href: 'https://github.com/subhana123/Humanoid-Robotics-Textbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Humanoid Robotics`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
