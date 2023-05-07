import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Security',
    Svg: require('@site/static/images/home_security.svg').default,
    description: (
      <>
        A collection of tips and tricks about security vulnerabilities and
        attacks continually updated.
      </>
    ),
  },
  {
    title: 'Examples',
    Svg: require('@site/static/images/home_examples.svg').default,
    description: (
      <>
        The examples section is a collection of real-world examples of security
        vulnerabilities and exploits.
      </>
    ),
  },
  {
    title: 'Writeups',
    Svg: require('@site/static/images/home_writeups.svg').default,
    description: (
      <>
        The writeups section is a collection of writeups of security challenges.
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
