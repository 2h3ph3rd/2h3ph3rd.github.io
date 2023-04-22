import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Prova',
    url: 'https://stackoverflow.com/questions/41030425/disabling-cors-using-js-fetch',
  },
]

function Bookmark({ title, url }) {
  return <div className={clsx('col col--4')}></div>
}

export default function Bookmarks() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Bookmark key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
