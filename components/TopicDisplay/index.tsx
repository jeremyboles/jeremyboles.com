import { TransformedTopic } from '@jeremyboles/wiki'
import React from 'react'

import styles from './index.module.scss'
import Content from './Content'
import Journal from './Journal'
import Navigation from './Navigation'
import Related from './Related'
import Writing from './Writing'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface TopicDisplayProps {
  children: TransformedTopic[]
  parent: TransformedTopic | null
  topic: TransformedTopic
}

export default function TopicDisplay({ children, parent, topic }: TopicDisplayProps) {
  return (
    <div className={styles.container}>
      <div>
        <Navigation children={children} parent={parent} topic={topic} />
        <hr className={styles.divider} />

        <Content topic={topic} />

        <Journal topic={topic} />
        <Writing topic={topic} />
      </div>
      <Related topic={topic} />
    </div>
  )
}
