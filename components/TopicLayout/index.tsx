import React, { ReactNode } from 'react'

import styles from './index.module.scss'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface TopicLayoutProps {
  children?: ReactNode
}

export default function TopicLayout({ children }: TopicLayoutProps) {
  return <section className={styles.container}>{children}</section>
}
