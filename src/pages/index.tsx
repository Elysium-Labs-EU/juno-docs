import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--secondary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--md"
            to="/docs/juno/development/getting-started"
          >
            Start with Juno development
          </Link>
          <Link
            style={{ marginLeft: "1rem" }}
            className="button button--outline button--secondary button--md"
            to="/docs/juno/usage/"
          >
            How to use Juno
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="All the documentation you need to get started with Juno."
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <div className={clsx("container", styles.heroBanner)}>
          <h2>
            Work in progress{" "}
            <span role="img" aria-label="crane">
              🏗️
            </span>
          </h2>
        </div>
      </main>
    </Layout>
  );
}
