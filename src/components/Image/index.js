import React from 'react'

export default function ({ src, width, height, caption, source }) {
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
    <p align="center">
      <a href={src} target="_blank" className="no-link">
        <img src={src} width={width} height={height} className="zoom-effect" />
      </a>
      {caption}{source}
    </p>
  )
}
