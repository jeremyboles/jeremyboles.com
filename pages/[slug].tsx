import { all, get, FileSlug, TransformedTopic } from '@jeremyboles/wiki'
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

import TopicBreadcrumbs from '../components/TopicBreadcrumbs'
import TopicContent from '../components/TopicContent'
import TopicHeader from '../components/TopicHeader'
import TopicJournal from '../components/TopicJournal'
import TopicLayout from '../components/TopicLayout'
import TopicMap from '../components/TopicMap'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface TopicPageParams extends ParsedUrlQuery {
  slug: FileSlug
}

interface TopicPageProps {
  topic: TransformedTopic
}

export default function TopicPage({ topic }: TopicPageProps) {
  return (
    <>
      <Head>
        <title>Wiki | Jeremy Boles</title>
      </Head>

      <article>
        <TopicHeader topic={topic} />
        <TopicLayout>
          <TopicBreadcrumbs topic={topic} />
          <TopicContent topic={topic} />
          <TopicMap topic={topic} />
          <TopicJournal topic={topic} />
        </TopicLayout>
      </article>
    </>
  )
}

//
// Data fetching
// -------------------------------------------------------------------------------------------------

type Context = GetStaticPropsContext<TopicPageParams>

export async function getStaticProps(context: Context): Promise<GetStaticPropsResult<TopicPageProps>> {
  return {
    props: {
      topic: await get(context.params.slug),
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
