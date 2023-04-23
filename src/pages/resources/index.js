import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Bookmarks from '@site/src/components/Bookmarks'

import styles from './index.module.css'

export default function ResourcesPage() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <div class="hero shadow--lw">
        <div class="container">
          <h1 class="hero__title">🔗 Resources</h1>
          <p class="hero__subtitle">
            A collection of awesome resources for programming, security, and
            devops topics
          </p>
        </div>
      </div>
      <form>
        <div class="navbar__search">
          <input class="navbar__search-input" placeholder="Search" />
        </div>
      </form>
      Category:
      <Bookmarks />
      <ul class="pagination">
        <li class="pagination__item disabled">
          <a class="pagination__link" href="#url">
            &laquo;
          </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#url">
            1
          </a>
        </li>
        <li class="pagination__item pagination__item--active">
          <a class="pagination__link" href="#url">
            2
          </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#2">
            3
          </a>
        </li>
        <li class="pagination__item">
          <span>...</span>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#url">
            &raquo;
          </a>
        </li>
      </ul>
    </Layout>
  )
}
