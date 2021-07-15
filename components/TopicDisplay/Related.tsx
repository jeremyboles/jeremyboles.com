import { TransformedTopic } from '@jeremyboles/wiki'
import React from 'react'

import styles from './Related.module.scss'

//
// Main component
// -------------------------------------------------------------------------------------------------

interface RelatedProps {
  topic: TransformedTopic
}

export default function Related({ topic }: RelatedProps) {
  return (
    <aside className={styles.container}>
      <div>
        <h3 className="hide">Topics Related to “{topic.file.data.title}”</h3>

        <dl className={styles.topics}>
          <div>
            <dt>Other Topics Under “Trips”</dt>
            <dd>
              <a href="#">Trip to Ireland, 2012</a>
            </dd>
            <dd>
              <a href="#">Trip to Italy, 2013</a>
            </dd>
            <dd>
              <a href="#">Trip to Irlend, 2013</a>
            </dd>
          </div>

          <div>
            <dt>
              Topics That Link <em>to</em> Here
            </dt>
            <dd>
              <a href="#">Travel</a>
            </dd>
            <dd>
              <a href="#">Ireland, 2018</a>
            </dd>
          </div>

          <div>
            <dt>
              Topics Linked <em>from</em> Here{' '}
            </dt>
            <dd>
              <a href="#">Travel</a>
            </dd>
            <dd>
              <a href="#">Ireland, 2018</a>
            </dd>
          </div>

          <div>
            <dt>Topics with Similiar Tags</dt>
            <dd>
              <a href="#">Travel</a>
            </dd>
            <dd>
              <a href="#">Ireland, 2018</a>
            </dd>
          </div>
        </dl>
      </div>
    </aside>
  )
}
