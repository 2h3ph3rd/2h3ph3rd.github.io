import React from 'react'

export default function ({ src, width, height, source }) {
  if (width == undefined) {
    width = 'auto'
  }

  if (height == undefined) {
    height = 'auto'
  }

  if (source) {
    source = (
      <p>
        <small>
          [<a href={source} target="_blank">source</a>]
        </small>
      </p>
    )
  }

  return (
    <p align="center" class="zoom-effect">
      <a href={src} target="_blank" class="no-link">
        <img src={src} width={width} height={height} />
      </a>
      {source}
    </p>
  )
}
