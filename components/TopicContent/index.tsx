import { TransformedTopic } from '@jeremyboles/wiki'
import { createElement, ReactNode } from 'react'
import stringify from 'rehype-react'
import unified from 'unified'

import styles from './index.module.scss'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface TopicContentProps {
  topic: TransformedTopic
}

export default function TopicContent({ topic }: TopicContentProps) {
  return <div className={styles.container}>{unified().use(stringify, { createElement }).stringify(topic.hast)}</div>
}
