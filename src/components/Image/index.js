import React from 'react'

export default function ({ children, src, width, height }) {
  let caption = '';
  if (width == undefined) {
    width = 'auto'
  }

  if (height == undefined) {
    height = 'auto'
  }

  if (children) {
    caption = <p style={{ fontSize: '0.8em' }}>{children}</p>
  }

  return (
    <p align="center">
      <img src={src} width={width} height={height}></img>
      {caption}
    </p>
  )
}
