import { TransformedTopic } from '@jeremyboles/wiki'
import React, { createElement } from 'react'
import stringify from 'rehype-react'
import unified from 'unified'

import styles from './Content.module.scss'

//
// Main content
// -------------------------------------------------------------------------------------------------

interface ContentProps {
  topic: TransformedTopic
}

export default function Content({ topic }: ContentProps) {
  return (
    <article className={styles.container}>
      <a hidden id="article-content" />

      <header>
        <h1 className={styles.title}>
          <a href="#">
            <span>Topic:</span> {topic.file.data.title}
          </a>
        </h1>
      </header>

      <div className={styles.content}>{unified().use(stringify, { createElement }).stringify(topic.hast)}</div>

      <footer className={styles.map}>
        <figure>
          <svg />
          <figcaption className={styles.info}>
            Last updated on the 27th of March, 2021 from Springfield, Missouri, United States.
          </figcaption>
        </figure>
      </footer>
    </article>
  )
}
