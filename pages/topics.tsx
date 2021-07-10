import { all, TransformedTopic } from '@jeremyboles/wiki'
import { GetStaticPropsResult } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface TopicsPageProps {
  topics: Array<{ slug: string; title?: string }>
}

export default function TopicsPage({ topics = [] }: TopicsPageProps) {
  return (
    <>
      <Head>
        <title>Wiki | Jeremy Boles</title>
      </Head>

      <ul>
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link href={`/${topic.slug}`}>
              <a>{topic.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

//
// Data fetching
// -------------------------------------------------------------------------------------------------

export async function getStaticProps(context): Promise<GetStaticPropsResult<TopicsPageProps>> {
  const data = await all()
  const topics = Object.entries(data).map(([slug, { file }]) => {
    return { slug, title: file.data.title as null | string }
  })

  return {
    props: { topics },
  }
}
