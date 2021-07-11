import { TransformedTopic } from '@jeremyboles/wiki'
import Link from 'next/link'
import React from 'react'

import styles from './index.module.scss'

//
// Settings and configuration
// -------------------------------------------------------------------------------------------------

const DOM_ID = 'topic-breadcrumb-navigation'

//
// Main components
// -------------------------------------------------------------------------------------------------

interface TopicBreadcrumbsProps {
  topic: TransformedTopic
}

export default function TopicBreadcrumbs({ topic }: TopicBreadcrumbsProps) {
  return (
    <div aria-labelledby={DOM_ID} className={styles.container}>
      <p id={DOM_ID}>Breadcrumb navigation</p>
      <ol>
        <li>
          <Link href="/topics">
            <a>Wiki</a>
          </Link>
        </li>

        <li>
          <Link href="Topic">
            <a>Topic</a>
          </Link>
        </li>

        <li>
          <Link href={`/${topic.file.data.slug}`}>
            <a aria-current="page">{topic.file.data.title}</a>
          </Link>
        </li>
      </ol>
    </div>
  )
}
