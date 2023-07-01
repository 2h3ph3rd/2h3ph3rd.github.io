import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

import feed from '@site/static/data/feed.json'

function getDescription(descrition) {
  const length = 200
  let description = descrition
  if (description != undefined && description.length > length) {
    description = description.substring(0, length) + '...'
  }
  return description
}

export default function HomepageFeedItem({ item }) {
  return (
    <a href={item.url} target="_blank" class="nolink">
      <div className={clsx('card zoom-effect shadow--tl', styles.card)}>
        <div class="card__image">
          <img
            src={item.image}
            title="Logo Title Text 1"
            className={styles.image}
          />
        </div>
        <div class="card__body">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <h3>{item.title}</h3>
                <p>{getDescription(item.description)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
