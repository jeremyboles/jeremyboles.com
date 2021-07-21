import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

import styles from './Top.module.scss'

//
// Settings and configuration
// -------------------------------------------------------------------------------------------------

const INTERNAL_LINKS = [
  ['About Me, in Roughly Ten Minutes', '/about'],
  ['Notable Work and Projects', '/work'],
  ['What I’m Up to Now', '/now'],
  ['Things That I‘ve Written', '/writing'],
  ['Places That I’ve Been', '/map'],
]

const SOCIAL_LINKS = [
  ['Mastodon', 'https://boles.social/@jeremy', 'jeremy@boles.social'],
  ['Twitter', 'https://twitter.com/jeremyboles', '@jeremyboles'],
  ['Instagram', 'https://instagram.com/germybowls', '@germybowls'],
  ['Facebook', 'https://facebook.com/germybowls', '@germybowls'],
  ['Github', 'https://github.com/jeremyboles', '@jeremyboles'],
]

//
// Main component
// -------------------------------------------------------------------------------------------------

export default function Top() {
  return (
    <div className={styles.container}>
      <div>
        <Navigation />
        <Biography />
      </div>
    </div>
  )
}

//
// Private components
// -------------------------------------------------------------------------------------------------

function Biography() {
  return (
    <article className={styles.biography}>
      <h3>About Me, in Fifteen Seconds</h3>
      <picture>
        <source
          sizes="200px"
          srcSet="/assets/photo@200.avif 200w, /assets/photo@400.avif 400w, /assets/photo@600.avif 600w"
          type="image/avif"
        />
        <source
          sizes="200px"
          srcSet="/assets/photo@200.webp 200w, /assets/photo@400.webp 400w, /assets/photo@600.webp 600w"
          type="image/webp"
        />
        <source
          sizes="200px"
          srcSet="/assets/photo@200.jpg 200w, /assets/photo@400.jpg 400w, /assets/photo@600.jpg 600w"
          type="image/jpeg"
        />
        <img alt="Jeremy Boles" decoding="async" height="200" loading="lazy" src="/assets/photo@200.jpg" width="200" />
      </picture>
      <p>
        Hi! I’m Jeremy Boles, an American programmer and designer based out of Southwest Missouri, in the United States.
        I currently work for Area 1 Security as a Senior UI Engineer, but I also run a small software studio called
        Central Standard on the side. Outside of work, I like to cook, travel, go for walks in the woods, and hang out
        with my family. <GenderIdentity pronouns={['he', 'him', 'his']} />
      </p>
    </article>
  )
}

interface GenderIdentityProps {
  /**
   * A list of pronouns (i.e. "she", "her", "per", "they", "xe") to render Wiktionary links for.
   */
  pronouns: string[]
}

function GenderIdentity({ pronouns }: GenderIdentityProps) {
  return (
    <b className={styles.genders}>
      {pronouns.map((pronoun, index) => (
        <Fragment key={pronoun}>
          {index !== 0 && ' / '}
          <a href={`https://en.wiktionary.org/wiki/${pronoun}#Pronoun`} rel="external noopener">
            {pronoun}
          </a>
        </Fragment>
      ))}
    </b>
  )
}

function Navigation() {
  const router = useRouter()

  return (
    <nav aria-label="About navigation" className={styles.navigation}>
      <dl>
        <div>
          <dt>Concerning Myself</dt>
          {INTERNAL_LINKS.map(([text, href]) => (
            <dd key={href}>
              <Link href={href}>
                <a aria-current={router?.pathname === href ? 'page' : undefined}>{text}</a>
              </Link>
            </dd>
          ))}
        </div>
        <div>
          <dt>Elsewhere</dt>
          {SOCIAL_LINKS.map(([network, href, handle, icon]) => (
            <dd key={href}>
              <a href={href} rel="external me noopener">
                {handle} on {network}
              </a>
            </dd>
          ))}
        </div>
      </dl>
    </nav>
  )
}
