import { TransformedTopic } from '@jeremyboles/wiki'
import React from 'react'

import styles from './Journal.module.scss'

//
// Main content
// -------------------------------------------------------------------------------------------------

interface JournalProps {
  topic: TransformedTopic
}

export default function Journal({ topic }: JournalProps) {
  return (
    <aside className={styles.container}>
      <h3>Journal Entries Related to “Colophon”</h3>
    </aside>
  )
}
