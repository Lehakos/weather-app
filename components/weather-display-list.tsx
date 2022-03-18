import React from 'react'
import { DataStatus, WeatherData } from 'types/global'
import { WeatherDisplay } from './weather-display'

type Props = {
  city?: string
  dataStatus: DataStatus
  items: WeatherData[]
}

export const WeatherDisplayList: React.FC<Props> = ({
  city = '',
  dataStatus,
  items,
}) => {
  return (
    <article>
      <h2 className="sr-only">Weather in {city}</h2>

      {items.map((item) => (
        <div key={item.date} className="mb-4 last:mb-0">
          <WeatherDisplay dataStatus={dataStatus} data={item} />
        </div>
      ))}
    </article>
  )
}
