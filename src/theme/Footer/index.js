import React from 'react'
import Footer from '@theme-original/Footer'
import styles from './styles.module.css'

export default function FooterWrapper(props) {
  return (
    <>
      {/* <div className="hero shadow--lw hero--dark padding-top--xl">
        <div className="container">
          <div className="row">
            <div className="col col--4">
              <p>
                <b>Links</b>
              </p>
              <p>
                <a className={styles.link} href="/docs/security">Security</a>
              </p>
              <p>
                <a className={styles.link} href="/docs/writeups">Writeups</a>
              </p>
              <p>
                <a className={styles.link} href="/resources">Resources</a>
              </p>
            </div>
            <div className="col col--4">
              <p>
                <a className={styles.link} href="/docs/security">Source</a>
              </p>
            </div>
            <div className="col col--4"></div>
          </div>
        </div>
      </div> */}
      <Footer {...props} />
    </>
  )
}
