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
    <>
      <aside className={styles.container}>
        <h3>Journal Entries Related to “Colophon”</h3>

        <article className={styles.entry}>
          <h4 className={styles.icon}>
            <a href="#">A Note Posted on December 2nd, 2014</a>
          </h4>

          <p className={styles.content}>Nothing says “long flight to Europe” like Nescafé.</p>

          <dl className={styles.meta}>
            <dt>Published at</dt>
            <dd>
              <time dateTime="2014-12-02T05:53:00+01:00">Dec 2 2014 5:53 am</time>
            </dd>
            <dt>Published from</dt>
            <dd>
              Paris, <abbr title="France">FR</abbr>
            </dd>
          </dl>
        </article>
      </aside>
    </>
  )
}
