import { TransformedTopic } from '@jeremyboles/wiki'
import React from 'react'

import styles from './Writing.module.scss'

//
// Main content
// -------------------------------------------------------------------------------------------------

interface WritingProps {
  topic: TransformedTopic
}

export default function Writing({ topic }: WritingProps) {
  return (
    <aside className={styles.container}>
      <h3>Writing Related to “Colophon”</h3>
    </aside>
  )
}
