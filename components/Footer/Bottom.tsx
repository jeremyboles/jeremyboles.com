import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './Bottom.module.scss'

//
// Settings and configuration
// -------------------------------------------------------------------------------------------------

const LINKS = [
  ['Subscribe', '/subscribe'],
  ['Contact', '/contact'],
  ['I Don’t Track You', '/privacy'],
  ['Colophon', '/colophon'],
  ['Site Map', '/site-map'],
]

//
// Main component
// -------------------------------------------------------------------------------------------------

export default function Bottom() {
  return (
    <div className={styles.wrapper}>
      <div>
        <Wordmark />
        <Navgiation />
        <Copyright />
      </div>
    </div>
  )
}

//
// Private components
// -------------------------------------------------------------------------------------------------

function Copyright() {
  return (
    <p className={styles.copyright}>
      Copyright <span>&copy;</span> 2021 Jeremy Boles. Content licensed under the{' '}
      <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="external license noopener">
        Creative Commons Attribution-ShareAlike 4.0 International
      </a>{' '}
      license.
    </p>
  )
}

function Navgiation() {
  return (
    <nav aria-label="Footer navigation" className={styles.navigation}>
      <ul>
        {LINKS.map(([text, href]) => (
          <li key={href}>
            <Link href={href}>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Wordmark() {
  const router = useRouter()

  return (
    <p className={styles.wordmark}>
      <Link href="/">
        <a aria-current={router?.pathname === '/' ? 'page' : undefined} rel="home" title="jeremyboles.com Home Page">
          Jeremy Boles
        </a>
      </Link>
    </p>
  )
}
