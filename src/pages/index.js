import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import HomepageHeader from '@site/src/components/HomepageHeader'
import Bookmarks from '@site/src/components/Bookmarks'

import styles from './index.module.css'

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Bookmarks />
      </main>
    </Layout>
  )
}
