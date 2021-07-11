import { TransformedTopic } from '@jeremyboles/wiki'
import React from 'react'

import styles from './index.module.scss'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface TopicJournalProps {
  topic: TransformedTopic
}

export default function TopicJournal({ topic }: TopicJournalProps) {
  return <aside className={styles.container}>Journal</aside>
}
