import { all, children, get, parent, FileSlug, TransformedTopic } from '@jeremyboles/wiki'
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

import TopicDisplay from '../components/TopicDisplay'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface TopicPageParams extends ParsedUrlQuery {
  slug: FileSlug
}

interface TopicPageProps {
  breadcrumbs: TransformedTopic[]
  children: TransformedTopic[]
  parent: TransformedTopic | null
  topic: TransformedTopic
}

export default function TopicPage({ breadcrumbs, children, parent, topic }: TopicPageProps) {
  return (
    <>
      <Head>
        <title>{topic.file.data.title} — Wiki | Jeremy Boles</title>
        <link rel="canonical" href={`/${topic.file.data.slug}`} />
      </Head>

      <TopicDisplay breadcrumbs={breadcrumbs} children={children} parent={parent} topic={topic} />
    </>
  )
}

//
// Data fetching functions
// -------------------------------------------------------------------------------------------------

type Context = GetStaticPropsContext<TopicPageParams>

export async function getStaticProps(context: Context): Promise<GetStaticPropsResult<TopicPageProps>> {
  const { slug } = context.params
  return {
    props: {
      breadcrumbs: await breadcrumbs(slug),
      children: await children(slug),
      parent: await parent(slug),
      topic: await get(slug),
    },
  }
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const slugs = Object.keys(await all())
  return {
    fallback: false,
    paths: slugs.map((slug) => ({ params: { slug } })),
  }
}

//
// Private functions
// -------------------------------------------------------------------------------------------------

async function breadcrumbs(slug: FileSlug) {
  const topics: TransformedTopic[] = []
  let topic = await parent(slug)
  while (topic) {
    topics.push(topic)
    topic = await parent(topic.file.data.slug)
  }
  return topics.reverse()
}
