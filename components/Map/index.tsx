import { geoNaturalEarth1, geoPath } from 'd3-geo'
import React, { useMemo } from 'react'
import { feature } from 'topojson-client'
import world from 'world-atlas/land-110m.json'

//
// Settings and configuration
// -------------------------------------------------------------------------------------------------

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
  height?: number | string
  points?: Coordinates[]
  width?: number | string
}

export default function Map({ height = 500, points = [], width = 960 }: MapProps) {
  height = typeof height === 'string' ? Number.parseFloat(height) : height
  width = typeof width === 'string' ? Number.parseFloat(width) : width

  const scale = height / width

  const [land] = feature(world, world.objects.land).features
  const projection = geoNaturalEarth1().center([0, 0]).rotate([-11.25, 0, 0]).fitSize([width, height], land)

  const path = geoPath().projection(projection)

  return (
    <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <g className="map">
        <path d={path(land)} key={JSON.stringify(land)} fill="currentColor" />
      </g>

      <g className="points">
        {points.map(({ latitude, longitude }) => {
          const [cx, cy] = projection([longitude, latitude])
          return <circle cx={cx} cy={cy} key={`${latitude}${longitude}`} fill="currentColor" r={scale * 8} />
        })}
      </g>
    </svg>
  )
}
