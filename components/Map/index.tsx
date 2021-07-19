import { geoMercator, geoPath } from 'd3-geo'
import dynamic from 'next/dynamic'
import React from 'react'
import { feature } from 'topojson-client'
import json from 'world-atlas/land-50m.json'

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
  const { features } = feature(json, json.objects[Object.keys(json.objects)[0]])
  const PROJECTION = geoMercator().center(CENTER).rotate(ROTATE)

  return function Map({ points }: MapProps) {
    const path = geoPath().projection(PROJECTION)

    return (
      <svg height="624" viewBox="0 0 960 624" width="960" xmlns="http://www.w3.org/2000/svg">
        <g className="map">
          {features.map((feature) => (
            <path d={path(feature)} key={JSON.stringify(feature)} fill="currentColor" />
          ))}
        </g>

        <g className="points">
          {points.map(({ latitude, longitude }) => {
            const [cx, cy] = PROJECTION([longitude, latitude])
            return <circle cx={cx} cy={cy} key={`${latitude}${longitude}`} fill="white" r="8" />
          })}
        </g>
      </svg>
    )
  }
})

export default Map
