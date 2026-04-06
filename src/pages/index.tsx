import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const highlights = [
  'Deterministic policy evaluation',
  'Policy simulation before rollout',
  'API, CLI, and embedded runtime modes',
];

const quickLinks = [
  {
    title: 'Start With Overview',
    description: 'Get the architecture and usage model before implementation.',
    to: '/docs/getting-started/overview',
    cta: 'Read Overview',
  },
  {
    title: 'Run With Example Assets',
    description: 'Use docs-contained config, model, policies, and policy tests.',
    to: '/docs/examples/example-files',
    cta: 'Open Example Files',
  },
  {
    title: 'Integrate Through APIs',
    description: 'Use access checks, simulation, and management endpoints.',
    to: '/docs/reference/api-reference',
    cta: 'Open API Reference',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <img
  src="/img/logo.png"
  alt="KeyNetra Logo"
  style={{ width: "420px", height: "auto", marginBottom: "1rem" }}
/><br></br>
        <p className={styles.eyebrow}>Authorization Infrastructure</p>
        <Heading as="h1" className={styles.heroTitle}>
          {/* {siteConfig.title} */}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/getting-started/overview">
            Get Started
          </Link>
          <Link className="button button--outline button--primary button--lg" to="/docs/reference/api-reference">
            View API
          </Link>
        </div>

        <div className={styles.heroMeta}>
          {highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

    
      </div>
    </header>
  );
}

function QuickLinks(): ReactNode {
  return (
    <section className={styles.quickLinksSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Build Safe Authorization Flows
        </Heading>
        <p className={styles.sectionLead}>
          Start with structured docs, use runnable example assets, then move to reference and operations.
        </p>
        <div className={styles.quickLinksGrid}>
          {quickLinks.map((item) => (
            <article className={styles.quickCard} key={item.title}>
              <Heading as="h3">{item.title}</Heading>
              <p>{item.description}</p>
              <Link to={item.to} className={styles.quickCardCta}>
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="KeyNetra documentation portal: architecture, APIs, operations, and development guides.">
      <HomepageHeader />
      <main>
        <QuickLinks />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
