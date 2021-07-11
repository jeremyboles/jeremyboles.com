import { TransformedTopic } from '@jeremyboles/wiki'
import React from 'react'

import styles from './index.module.scss'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface TopicMapProps {
  topic: TransformedTopic
}

export default function TopicMap({ topic }: TopicMapProps) {
  return (
    <aside className={styles.container}>
      <figure>
        <svg className={styles.map}></svg>
        <figcaption className={styles.info}>
          Last updated on the 27th of March, 2021 from Springfield, Missouri, United States.
        </figcaption>
      </figure>
    </aside>
  )
}
