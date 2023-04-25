import React from 'react'
import Footer from '@theme-original/Footer'
import styles from './styles.module.css'

export default function FooterWrapper(props) {
  return (
    <>
      {/* <div class="hero shadow--lw hero--dark padding-top--xl">
        <div class="container">
          <div class="row">
            <div class="col col--4">
              <p>
                <b>Links</b>
              </p>
              <p>
                <a href="/docs/security">Security</a>
              </p>
              <p>
                <a href="/docs/writeups">Writeups</a>
              </p>
              <p>
                <a href="/resources">Resources</a>
              </p>
            </div>
            <div class="col col--4">
              <p>
                <a href="/docs/security">Source</a>
              </p>
            </div>
            <div class="col col--4"></div>
          </div>
        </div>
      </div> */}
      <Footer {...props} />
    </>
  )
}
