import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './index.module.scss'

//
// Settings and configuration
// -------------------------------------------------------------------------------------------------

const NAV_LINKS = [
  ['Journal', '/journal'],
  ['Writing', '/writing'],
  ['Wiki', '/topics'],
  ['Calendar', '/calendar'],
  ['Map', '/map'],
]

//
// Main component
// -------------------------------------------------------------------------------------------------

export default function Header() {
  return (
    <header className={styles.container} role="banner">
      <Wordmark />
      <p className={styles.tagline}>A personal wiki and social media replacement, of&nbsp;sorts</p>

      <Shortcuts />
      <Navigation />
    </header>
  )
}

//
// Private components
// -------------------------------------------------------------------------------------------------

function Shortcuts() {
  return (
    <nav aria-labelledby="header-shortcuts-label" className={styles.shortcuts}>
      <p id="header-shortcuts-label">Page shortcuts:</p>
      <ul>
        <li>
          <a href="#main-content">Skip to main content</a>
        </li>
      </ul>
    </nav>
  )
}

function Navigation() {
  const router = useRouter()

  return (
    <nav aria-labelledby="primary-navigation-label" className={styles.navigation}>
      <p id="primary-navigation-label">Website navigation:</p>
      <ul>
        {NAV_LINKS.map(([name, href]) => (
          <li key={href}>
            <Link href={href}>
              <a aria-current={router?.pathname === href ? 'page' : undefined}>{name}</a>
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
    <h1 className={styles.wordmark}>
      <Link href="/">
        <a aria-current={router?.pathname === '/' ? 'page' : undefined} rel="home" title="jeremyboles.com">
          Jeremy Boles
        </a>
      </Link>
    </h1>
  )
}
