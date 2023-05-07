import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

import feed from '@site/static/data/feed.json'
import HomepageFeedItem from '../HomepageFeedItem'

export default function HomepageFeed() {
  let items = feed.channel.items
  items = items.slice(0, 6)

  return (
    <div class="container">
      <div class="row padding-bottom--lg">
        <h1 className={styles.title}>Latest articles</h1>
      </div>
      {items.map((item, idx) => (
        <div class="row margin-bottom--lg margin-horiz--sm">
          <HomepageFeedItem idx={idx} item={item} />
        </div>
      ))}
    </div>
  )
}
