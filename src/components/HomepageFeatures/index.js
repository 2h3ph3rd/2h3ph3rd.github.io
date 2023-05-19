import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Security',
    Svg: require('@site/static/images/home-security.svg').default,
    description: (
      <>A collection of tips and tricks for CTFs and cybersecurity in general</>
    ),
  },
  {
    title: 'Examples',
    Svg: require('@site/static/images/home-examples.svg').default,
    description: (
      <>Common applications of security vulnerabilities and relative exploits</>
    ),
  },
  {
    title: 'Writeups',
    Svg: require('@site/static/images/home-writeups.svg').default,
    description: (
      <>
        Detailed solutions of CTFs, challenges, machines, and other
        security-related content
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
