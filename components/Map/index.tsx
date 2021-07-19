import { geoMercator } from 'd3-geo'
import dynamic from 'next/dynamic'
import React from 'react'

import map from './map.svg'

//
// Settings and configuration
// -------------------------------------------------------------------------------------------------

const CENTER = [0, 58]
const ROTATE = [-11.25, 0, 0]

//
// Typescript
// -------------------------------------------------------------------------------------------------

interface Coordinates {
  latitude: number
  longitude: number
}

//
// Main component
// -------------------------------------------------------------------------------------------------

interface MapProps {
  points?: Coordinates[]
}

const Map = dynamic(async () => {
  const PROJECTION = geoMercator().center(CENTER).rotate(ROTATE)

  return function Map({ points }: MapProps) {
    return (
      <svg height="624" viewBox="0 0 960 624" width="960" xmlns="http://www.w3.org/2000/svg">
        <use href={`${map.src}#map`} />

        <g className="points">
          {points.map(({ latitude, longitude }) => {
            const [cx, cy] = PROJECTION([longitude, latitude])
            return <circle cx={cx} cy={cy} key={`${latitude}${longitude}`} fill="white" r="12" />
          })}
        </g>
      </svg>
    )
  }
})

export default Map
