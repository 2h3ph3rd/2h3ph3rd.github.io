import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

import bookmarks from '@site/static/data/bookmarks.json'

function Bookmark({ bookmark }) {
  let image = bookmark.image
  let title = bookmark.title
  let description = bookmark.description
  let tags = []

  if (image != undefined) {
    image = (
      <div className="card__image">
        <img src={image} alt="Image alt text" title="Logo Title Text 1" />
      </div>
    )
  }

  let favicon = ''
  if (bookmark.favicon != undefined) {
    favicon = <img src={bookmark.favicon} alt="favicon" title={title} />
    title = ' ' + title
  }

  if (description != undefined && description.length > 170) {
    description = description.substring(0, 170) + '...'
  }

  bookmark.tags.forEach((tag) => {
    tags = [
      ...tags,
      <span class="badge badge--primary margin-right--sm">{tag}</span>,
    ]
  })

  return (
    <a href={bookmark.url} className={styles.link}>
      <div className={clsx('card', styles.card)}>
        {image}
        <div class="card__body">
          <h4>
            {favicon}
            {title}
          </h4>
          <small>{description}</small>
        </div>
        <div class="card__footer">{tags}</div>
      </div>
    </a>
  )
}

export default function Bookmarks() {
  return (
    <section>
      <div className="container padding-vert--xl">
        <div className="row">
          {bookmarks.map((bookmark, idx) => (
            <div class="col col--3 margin-bottom--md">
              <Bookmark key={idx} bookmark={bookmark} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
