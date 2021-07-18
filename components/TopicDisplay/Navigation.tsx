import { children as getChildren, parent as getParent, TransformedTopic } from '@jeremyboles/wiki'

import Link from 'next/link'
import React from 'react'

import styles from './Navigation.module.scss'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface NavigationProps {
  children: TransformedTopic[]
  parent: TransformedTopic | null
  topic: TransformedTopic
}

export default function Navigation({ children, parent, topic }: NavigationProps) {
  return (
    <aside aria-label="Wiki navigation" className={styles.container}>
      <nav>
        <p className={styles.label}>Breadcrumb navigation:</p>

        <ol className={styles.breadcrumbs}>
          <li>
            <Link href="/topics">
              <a>Wiki</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Travel</a>
            </Link>
          </li>
          <li>
            <Link href={`/${topic.file.data.slug}`}>
              <a aria-current="page">{topic.file.data.title}</a>
            </Link>
          </li>
        </ol>
      </nav>

      <nav>
        <p className={styles.label}>Topic navigation:</p>

        <dl className={styles.related}>
          <Parent topic={parent} />
          <Children topics={children} />

          <div className={styles.tags}>
            <dt className={styles.label}>Tagged with</dt>
            <dd>
              <Link href="/">
                <a rel="tag">tag</a>
              </Link>
            </dd>
            <dd>
              <Link href="/">
                <a rel="tag">tag2</a>
              </Link>
            </dd>
            <dd>
              <Link href="/">
                <a href="#" rel="tag">
                  tag3
                </a>
              </Link>
            </dd>
          </div>
        </dl>
      </nav>
    </aside>
  )
}

//
// Private components
// -------------------------------------------------------------------------------------------------

interface ChildrenProps {
  topics: TransformedTopic[]
}

function Children({ topics }: ChildrenProps) {
  if (topics.length === 0) return null

  return (
    <div className={styles.children}>
      <dt className={styles.label}>Child topics</dt>
      {topics.map((topic) => (
        <dd>
          <Link href={`/${topic.file.data.slug}`}>
            <a>{topic.file.data.title}</a>
          </Link>
        </dd>
      ))}
    </div>
  )
}

interface ParentProps {
  topic: TransformedTopic | null
}

function Parent({ topic }: ParentProps) {
  if (!topic) return null

  return (
    <div className={styles.parent}>
      <dt className={styles.label}>Parent topic</dt>
      <dd>
        <Link href={`/${topic.file.data.slug}`}>
          <a>{topic.file.data.title}</a>
        </Link>
      </dd>
    </div>
  )
}
