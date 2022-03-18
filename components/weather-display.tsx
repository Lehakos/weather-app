import React from 'react'
import Skeleton from 'react-loading-skeleton'
import format from 'date-fns/format'
import { DataStatus, WeatherData } from 'types/global'
import { WeatherIcon } from './weather-icon'
import { Stats, StatsItem } from './stats'

export type Props = {
  dataStatus: DataStatus
  data: WeatherData
}

const ICON_SIZE = 50

export const WeatherDisplay: React.FC<Props> = ({ dataStatus, data }) => {
  const loading = dataStatus === DataStatus.loading
  const date = new Date(data.date)
  const formattedDate = format(date, 'MM/dd/yy')
  const stats: StatsItem[] = React.useMemo(
    () => [
      {
        name: 'Wind',
        value: String(data.wind),
      },
      {
        name: 'Humidity',
        value: String(data.humidity),
      },
    ],
    [data]
  )

  return (
    <article className="flex w-full rounded-sm border p-3">
      <h2 className="sr-only">Weather for {formattedDate}</h2>

      <div className="mr-5 flex shrink-0 grow-0 items-center">
        <div className="mr-1 leading-none">
          {data.weatherType ? (
            <WeatherIcon
              weatherType={data.weatherType}
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          ) : (
            <Skeleton
              className="block"
              circle
              width={ICON_SIZE}
              height={ICON_SIZE}
              inline
            />
          )}
        </div>
        <div className="min-w-15 text-center">
          <span className="block text-lg">
            {loading ? <Skeleton /> : `${data.temperature}°C`}
          </span>
          <span>
            {loading ? (
              <Skeleton />
            ) : (
              <time dateTime={data.date}>{formattedDate}</time>
            )}
          </span>
        </div>
      </div>

      <div className="grow">
        {loading ? <Skeleton count={2} /> : <Stats items={stats} />}
      </div>
    </article>
  )
}
