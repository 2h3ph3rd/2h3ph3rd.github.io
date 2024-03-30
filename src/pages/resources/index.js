import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'
import ResourcesList from '../../components/ResourcesList'

export default function () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout>
      <div className="hero shadow--lw">
        <div className="container">
          <h1 className="hero__title">🔗 Resources</h1>
          <p className="hero__subtitle">
            A collection of awesome resources for programming, security, and
            devops topics
          </p>
        </div>
      </div>
      <ResourcesList />
    </Layout>
  )
}
