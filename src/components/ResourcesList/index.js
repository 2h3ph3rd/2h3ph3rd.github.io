import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

import resources from '@site/static/data/resources.json'

import ResourcesListItem from '@site/src/components/ResourcesListItem'

export default function () {
  return (
    <section>
      <div className="container padding-vert--lg">
        <div className="row">
          {resources.map((resource, idx) => (
            <div class="col col--3 margin-bottom--md">
              <ResourcesListItem key={idx} resource={resource} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
