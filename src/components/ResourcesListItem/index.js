import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

function GenerateImage(resource) {
  let image = resource.image
  return (
    <div className="card__image">
      <img
        src={image}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null // prevents looping
          currentTarget.src = '/images/gradients/gradient_01.jpeg'
        }}
        title={resource.title}
        className={styles.image}
      />
    </div>
  )
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

function GenerateFooter(resource) {
  let tags = [
    <span className="badge badge--primary margin-right--xs">
      {resource.category}
    </span>,
  ]
  resource.tags.forEach((tag) => {
    tags = [
      ...tags,
      <span className="badge badge--secondary margin-right--xs">{tag}</span>,
    ]
  })
  return tags
}

function GenerateDescription(resource) {
  const length = 200
  let description = resource.description
  if (description != undefined && description.length > length) {
    description = description.substring(0, length) + '...'
  }
  return <small>{description}</small>
}

export default function ResourcesListItem({ resource }) {
  let image = GenerateImage(resource)
  let header = GenerateHeader(resource)
  let description = GenerateDescription(resource)
  let tags = GenerateFooter(resource)

  return (
    <a href={resource.url} className="nolink" target="_blank">
      <div className={clsx('card zoom-effect', styles.card)}>
        {image}
        <div className="card__body">
          {header}
          {description}
        </div>
        <div className="card__footer">{tags}</div>
      </div>
    </a>
  )
}
