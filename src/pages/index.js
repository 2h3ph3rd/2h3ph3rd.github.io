import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'

import HomepageFeatures from '@site/src/components/HomepageFeatures'
import HomepageHeader from '@site/src/components/HomepageHeader'
import HomepageFeed from '@site/src/components/HomepageFeed'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageFeed />
      </main>
    </Layout>
  )
}
