import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      items: [
        'getting-started/overview',
        'getting-started/installation',
        'getting-started/quickstart',
        'getting-started/runtime-modes',
      ],
    },
    {
      type: 'category',
      label: 'Hands-On Examples',
      items: [
        'examples/example-files',
        'examples/end-to-end-api-flow',
        'examples/cli-workflows',
        'examples/policy-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/authorization-models',
        'core-concepts/request-evaluation-lifecycle',
        'core-concepts/consistency-and-revisions',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/system-architecture',
        'architecture/authorization-pipeline',
        'architecture/caching-and-consistency',
        'architecture/data-models',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/api-reference',
        'reference/cli-reference',
        'reference/configuration-files',
        'reference/environment-variables',
        'reference/policy-files',
        'reference/auth-model-files',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/deployment-docker',
        'operations/deployment-kubernetes',
        'operations/observability',
        'operations/security',
        'operations/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/local-development',
        'development/migrations',
        'development/testing',
        'development/ci-cd-release',
        'development/contributing',
      ],
    },
  ],
};

export default sidebars;
