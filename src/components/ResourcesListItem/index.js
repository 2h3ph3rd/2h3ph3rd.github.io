import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

function GenerateImage(resource) {
  let image = resource.image
  if (image != undefined) {
    image = (
      <div className="card__image">
        <img src={image} alt="cover" title={resource.title} />
      </div>
    )
  }
  return image
}

function GenerateFavicon(resource) {
  let favicon = resource.favicon
  if (resource.favicon != undefined) {
    favicon = (
      <img src={resource.favicon} alt="favicon" title={resource.title} />
    )
  }
  return favicon
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

function GenerateTitle(resource) {
  let title = resource.title
  if (resource.favicon != undefined) {
    title = ' ' + title
  }
  return title
}

export default function ({ resource }) {
  let image = GenerateImage(resource)
  let favicon = GenerateFavicon(resource)
  let title = GenerateTitle(resource)
  let description = GenerateDescription(resource)
  let tags = GenerateTags(resource)

  return (
    <a href={resource.url} className={styles.link} target="_blank">
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
