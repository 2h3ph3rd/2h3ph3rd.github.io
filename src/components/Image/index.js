import React from 'react'

export default function ({ src, width }) {
  if (width == undefined) {
    width = 'auto'
  }
  return (
    <p align="center">
      <img src={src} width={width}></img>
    </p>
  )
}
