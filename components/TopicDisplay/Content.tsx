import { TransformedTopic } from '@jeremyboles/wiki'
import { parseISO } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'
import Link from 'next/link'
import React, { createElement } from 'react'
import stringify from 'rehype-react'
import STATES from 'states-us'
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
          <Link href={`/${topic.file.data.slug}`}>
            <a rel="bookmark">
              <span>Topic:</span> {topic.file.data.title}
            </a>
          </Link>
        </h1>
      </header>

      <Markdown topic={topic} />
      <Map topic={topic} />
    </article>
  )
}

//
// Private components
// -------------------------------------------------------------------------------------------------

interface MapProps {
  topic: TransformedTopic
}

function Map({ topic }: MapProps) {
  const date = utcToZonedTime(parseISO(topic.file.data.updatedAt), topic.file.data.location.timeZone)

  return (
    <footer className={styles.map}>
      <figure>
        <svg />
        <figcaption className={styles.info}>
          Last updated on the {format(date, "do 'of' LLLL, yyyy")} from{' '}
          <Link href={`/map/${topic.file.data.location.geohash}`}>
            <a>{formatLocation(topic.file.data.location)}</a>
          </Link>
          .
        </figcaption>
      </figure>
    </footer>
  )
}

interface MarkdownProps {
  topic: TransformedTopic
}

function Markdown({ topic }: MarkdownProps) {
  return <div className={styles.content}>{unified().use(stringify, { createElement }).stringify(topic.hast)}</div>
}

//
// Private functions
// -------------------------------------------------------------------------------------------------

function formatLocation(location) {
  if (location.country === 'United States') {
    const state = STATES.find((s) => s.abbreviation === location.region)
    return `${location.locality}, ${state?.name || location.region}, ${location.country}`
  }

  return `${location.locality || location.region}, ${location.country}`
}
