import { TransformedTopic } from '@jeremyboles/wiki'
import { createElement, ReactNode } from 'react'
import stringify from 'rehype-react'
import unified from 'unified'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface TopicContentProps {
  topic: TransformedTopic
}

export default function TopicContent({ topic }: TopicContentProps) {
  return unified().use(stringify, { createElement }).stringify(topic.hast) as unknown as JSX.Element
}
