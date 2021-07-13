import { TransformedTopic } from '@jeremyboles/wiki'
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
            <a href="#">Wiki</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a aria-current="page" href="#">
              Colophon
            </a>
          </li>
        </ol>
      </nav>

      <nav>
        <p className={styles.label}>Topic navigation:</p>

        <dl className={styles.related}>
          <div className={styles.parent}>
            <dt className={styles.label}>Parent topic</dt>
            <dd>
              <a href="#">A Topic</a>
            </dd>
          </div>

          <div className={styles.children}>
            <dt className={styles.label}>Child topics</dt>
            <dd>
              <a href="#">Some Topic</a>
            </dd>
            <dd>
              <a href="#">Some Other Topic</a>
            </dd>
          </div>

          <div className={styles.tags}>
            <dt className={styles.label}>Tagged with</dt>
            <dd>
              <a href="#">tag</a>
            </dd>
            <dd>
              <a href="#">tag2</a>
            </dd>
            <dd>
              <a href="#">tag3</a>
            </dd>
          </div>
        </dl>
      </nav>
    </aside>
  )
}
