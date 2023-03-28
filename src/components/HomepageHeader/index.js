import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

function mobileVersion() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <div className="row">
          <div className="col col--12 padding--md text--center">
            <h1 className="hero__title">
              Hey there!
              <br />
              I'm Francesco 👋
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}

function desktopVersion() {
  const Svg = require('@site/static/img/header.svg').default

  return (
    <header className="hero hero--primary">
      <div className="container">
        <div className="row">
          <div className="col col--5 padding--xl text--center">
            <h1 className="hero__title">
              Hey there!
              <br />
              I'm Francesco 👋
            </h1>
          </div>
          <div className="col col--5 col--offset-1">
            <Svg className={styles.headerImage} />
          </div>
        </div>
      </div>
    </header>
  )
}

const getIsMobile = () => window.innerWidth <= 1200

export default function HomepageHeader() {
  const [isMobile, setIsMobile] = useState(getIsMobile())

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile())
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  if (isMobile) {
    return mobileVersion()
  } else {
    return desktopVersion()
  }
}
