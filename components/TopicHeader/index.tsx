import { TransformedTopic } from '@jeremyboles/wiki'
import Link from 'next/link'
import React from 'react'

import styles from './index.module.scss'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface TopichHeaderProps {
  topic: TransformedTopic
}

export default function TopicHeader({ topic }: TopichHeaderProps) {
  return (
    <header className={styles.container}>
      <div>
        <h1 className={styles.title}>
          <Link href={`/${topic.file.data.slug}`}>
            <a>{topic.file.data.title}</a>
          </Link>
        </h1>
        <RelatedTopics />
      </div>
    </header>
  )
}

//
// Private components
// -------------------------------------------------------------------------------------------------

function RelatedTopics() {
  return (
    <dl className={styles.related}>
      <div className={styles.parent}>
        <dt>Parent topic</dt>
        <dd>
          <Link href="/">
            <a>Parent Topic</a>
          </Link>
        </dd>
      </div>

      <div className={styles.children}>
        <dt>Child topics</dt>
        <dd>
          <Link href="/">
            <a>Child Topic #1</a>
          </Link>
        </dd>
        <dd>
          <Link href="/">
            <a>Child Topic #2</a>
          </Link>
        </dd>
      </div>

      <div className={styles.tags}>
        <dt>Tags</dt>
        <dd>
          <Link href="/">
            <a>tag-1</a>
          </Link>
        </dd>
        <dd>
          <Link href="/">
            <a>tag-2</a>
          </Link>
        </dd>
        <dd>
          <Link href="/">
            <a>tag-3</a>
          </Link>
        </dd>
      </div>
    </dl>
  )
}
