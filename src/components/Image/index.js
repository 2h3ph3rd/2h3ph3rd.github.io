import React from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

export default function ({ url }) {
  console.log(url)
  return (
    <p align="center">
      <img src={url}></img>
    </p>
  )
}
