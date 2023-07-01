import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

import feed from '@site/static/data/feed.json'
import HomepageFeedItem from '../HomepageFeedItem'

export default function HomepageFeed() {
  let items = feed.slice(0, 8)
  return (
    <div class="container">
      <div class="row padding-bottom--lg">
        <h1 className={styles.title}>Latest articles</h1>
      </div>
      <div class="row margin-bottom--xl">
        {items.map((item, idx) => (
          <div class="col col--3 margin-bottom--md">
            <HomepageFeedItem idx={idx} item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
