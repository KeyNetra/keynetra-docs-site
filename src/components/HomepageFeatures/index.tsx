import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  value: string;
  description: ReactNode;
};

const featureList: FeatureItem[] = [
  {
    title: 'Safe Change Workflow',
    value: 'Plan -> Analyze -> Apply',
    description: (
      <>
        Build decisions from policy files, detect risky changes early, and ship
        predictable authorization updates.
      </>
    ),
  },
  {
    title: 'Policy as Code',
    value: 'YAML + JSON + Polar',
    description: (
      <>
        Keep policies in source control, test them with deterministic suites, and
        promote validated changes across environments.
      </>
    ),
  },
  {
    title: 'Operational Control',
    value: 'API + CLI + Audit',
    description: (
      <>
        Run checks over HTTP or CLI, inspect simulation and impact analysis, and
        maintain a traceable authorization lifecycle.
      </>
    ),
  },
];

function Feature({title, value, description}: FeatureItem) {
  return (
    <article className={clsx('col col--4', styles.featureColumn)}>
      <div className={styles.featureCard}>
        <span className={styles.featurePill}>{value}</span>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Designed For Engineering Teams
        </Heading>
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
