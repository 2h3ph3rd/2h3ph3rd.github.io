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
    <a href={item.url} target="_blank" className="nolink">
      <div className={clsx('card zoom-effect shadow--tl', styles.card)}>
        <div className="card__image">
          <img
            src={item.image}
            title="Logo Title Text 1"
            className={styles.image}
          />
        </div>
        <div className="card__body">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
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
