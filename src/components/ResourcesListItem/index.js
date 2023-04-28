import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

function GenerateImage(resource) {
  let image = resource.image
  if (image != undefined) {
    image = (
      <div className="card__image">
        <img
          src={image}
          alt="cover"
          title={resource.title}
          className={styles.image}
        />
      </div>
    )
  }
  return image
}

function GenerateHeader(resource) {
  resource.title = ' ' + resource.title
  return (
    <div>
      <h4>
        <img src={resource.favicon} width="16px" height="16px" />
        {resource.title}
      </h4>
    </div>
  )
}

function GenerateTags(resource) {
  let tags = []
  resource.tags.forEach((tag) => {
    tags = [
      ...tags,
      <span class="badge badge--primary margin-right--sm">{tag}</span>,
    ]
  })
  return tags
}

function GenerateDescription(resource) {
  let description = resource.description
  if (description != undefined && description.length > 200) {
    description = description.substring(0, 200) + '...'
  }
  return description
}

export default function ({ resource }) {
  let image = GenerateImage(resource)
  let header = GenerateHeader(resource)
  let description = GenerateDescription(resource)
  let tags = GenerateTags(resource)

  return (
    <a href={resource.url} className={styles.link} target="_blank">
      <div className={clsx('card', styles.card)}>
        {image}
        <div class="card__body">
          {header}
          <small>{description}</small>
        </div>
        <div class="card__footer">{tags}</div>
      </div>
    </a>
  )
}
