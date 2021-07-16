import { TopicLocation, TransformedTopic } from '@jeremyboles/wiki'
import { parseISO } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { createElement } from 'react'
import STATES from 'states-us'

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

      <div className={styles.content}>
        <TableofContents topic={topic} />
        <Markdown topic={topic} />
      </div>

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
          Last updated on the {format(date, "do 'of' LLLL, yyyy")}
          {topic.file.data.location && (
            <>
              {' '}
              from{' '}
              <Link href={`/map/${topic.file.data.location.geohash}`}>
                <a>{formatLocation(topic.file.data.location)}</a>
              </Link>
            </>
          )}
          .
        </figcaption>
      </figure>
    </footer>
  )
}

interface MarkdownProps {
  topic: TransformedTopic
}
const Markdown = dynamic(async () => {
  const { default: unified } = await import('unified')
  const { default: stringify } = await import('rehype-react')

  return function Markdown({ topic }: MarkdownProps) {
    return <div className={styles.markdown}>{unified().use(stringify, { createElement }).stringify(topic.hast)}</div>
  }
})

interface TableOfContentsProps {
  topic: TransformedTopic
}

function TableofContents({ topic }: TableOfContentsProps) {
  if (!topic.file.data.tableOfContents) return null

  return (
    <nav aria-labelledby="topic-table-of-contents" className={styles.toc}>
      <h3 id="topic-table-of-contents">Table of Contents</h3>
      <ol>
        {topic.file.data.tableOfContents.map(({ id, title }) => (
          <li key={id}>
            <a href={id}>{title}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

//
// Private functions
// -------------------------------------------------------------------------------------------------

function formatLocation(location: TopicLocation) {
  if (location.country === 'United States') {
    const state = STATES.find((s) => s.abbreviation === location.region)
    return `${location.locality}, ${state?.name || location.region}, ${location.country}`
  }

  return `${location.locality || location.region}, ${location.country}`
}
