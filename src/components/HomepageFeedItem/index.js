import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

import feed from '@site/static/data/feed.json'

function getDescription(descrition) {
  let description = descrition
  if (description != undefined && description.length > 320) {
    description = description.substring(0, 320) + '...'
  }
  return description
}

export default function HomepageFeedItem({ item }) {
  return (
    <a href={item.link} target="_blank" class="nolink">
      <div class="card shadow--tl zoom">
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
