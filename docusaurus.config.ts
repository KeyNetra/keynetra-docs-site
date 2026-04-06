import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KeyNetra',
  tagline: 'Professional-grade authorization infrastructure for modern applications.',
  favicon: 'img/icon.png',
  future: {
    v4: true,
  },
  url: 'https://keynetra.dev',
  baseUrl: '/docs',
  organizationName: 'keynetra',
  projectName: 'keynetra',
  onBrokenLinks: 'throw',
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
          path: 'docs',
          editUrl: 'https://github.com/keynetra/keynetra/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/keynetra/keynetra/tree/main/',
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
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'KeyNetra',
      logo: {
        alt: 'KeyNetra Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/getting-started/overview',
          label: 'Start Here',
          position: 'left',
        },
        {
          to: '/docs/reference/api-reference',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://github.com/keynetra/keynetra',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/getting-started/overview',
            },
            {
              label: 'Example Files',
              to: '/docs/examples/example-files',
            },
            {
              label: 'API Reference',
              to: '/docs/reference/api-reference',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Contributing',
              to: '/docs/development/contributing',
            },
            {
              label: 'Security',
              to: '/docs/operations/security',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/keynetra/keynetra',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KeyNetra.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
