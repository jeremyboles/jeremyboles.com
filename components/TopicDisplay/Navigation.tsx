import { TransformedTopic } from '@jeremyboles/wiki'
import Link from 'next/link'
import React from 'react'

import styles from './Navigation.module.scss'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface NavigationProps {
  topic: TransformedTopic
}

export default function Navigation({ topic }: NavigationProps) {
  return (
    <aside aria-label="Wiki navigation" className={styles.container}>
      <nav>
        <p className={styles.label}>Breadcrumb navigation:</p>

        <ol className={styles.breadcrumbs}>
          <li>
            <Link href="/">
              <a>Wiki</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Travel</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a aria-current="page">Colophon</a>
            </Link>
          </li>
        </ol>
      </nav>

      <nav>
        <p className={styles.label}>Topic navigation:</p>

        <dl className={styles.related}>
          <div className={styles.parent}>
            <dt className={styles.label}>Parent topic</dt>
            <dd>
              <Link href="/">
                <a>A Topic</a>
              </Link>
            </dd>
          </div>

          <div className={styles.children}>
            <dt className={styles.label}>Child topics</dt>
            <dd>
              <Link href="/">
                <a>Some Topic</a>
              </Link>
            </dd>
            <dd>
              <Link href="/">
                <a>Some Other Topic</a>
              </Link>
            </dd>
          </div>

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
