import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'
import ResourcesList from '../../components/ResourcesList'

export default function () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout>
      <div class="hero shadow--lw">
        <div class="container">
          <h1 class="hero__title">🔗 Resources</h1>
          <p class="hero__subtitle">
            A collection of awesome resources for programming, security, and
            devops topics
          </p>
        </div>
      </div>
      <ResourcesList />
    </Layout>
  )
}
