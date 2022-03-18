import Image from 'next/image'
import React from 'react'
import { WeatherType } from 'types/global'

const iconsMap = {
  [WeatherType['Blowing Or Drifting Snow']]: 'snow',
  [WeatherType['Clear']]: 'sun',
  [WeatherType['Diamond Dust']]: 'dust',
  [WeatherType['Drizzle']]: 'light_rain',
  [WeatherType['Duststorm']]: 'dust',
  [WeatherType['Fog']]: 'fog',
  [WeatherType['Freezing Drizzle/Freezing Rain']]: 'light_rain',
  [WeatherType['Freezing Fog']]: 'fog',
  [WeatherType['Funnel Cloud/Tornado']]: 'tornado',
  [WeatherType['Hail']]: 'hail',
  [WeatherType['Hail Showers']]: 'hail',
  [WeatherType['Heavy Drizzle']]: 'rain',
  [WeatherType['Heavy Drizzle/Rain']]: 'rain',
  [WeatherType['Heavy Freezing Drizzle/Freezing Rain']]: 'snow',
  [WeatherType['Heavy Freezing Rain']]: 'snow',
  [WeatherType['Heavy Rain']]: 'heavy_rain',
  [WeatherType['Heavy Rain And Snow']]: 'snow',
  [WeatherType['Heavy Snow']]: 'snow',
  [WeatherType['Ice']]: 'snow',
  [WeatherType['Light Drizzle']]: 'light_rain',
  [WeatherType['Light Drizzle/Rain']]: 'rain',
  [WeatherType['Light Freezing Drizzle/Freezing Rain']]: 'snow',
  [WeatherType['Light Freezing Rain']]: 'snow',
  [WeatherType['Light Rain']]: 'light_rain',
  [WeatherType['Light Rain And Snow']]: 'snow',
  [WeatherType['Light Snow']]: 'snow',
  [WeatherType['Lightning Without Thunder']]: 'lightning',
  [WeatherType['Mist']]: 'fog',
  [WeatherType['Overcast']]: 'clouds',
  [WeatherType['Partially cloudy']]: 'sun_and_clouds',
  [WeatherType['Precipitation In Vicinity']]: 'sun_and_rain',
  [WeatherType['Rain']]: 'rain',
  [WeatherType['Rain Showers']]: 'heavy_rain',
  [WeatherType['Sky Coverage Decreasing']]: 'sun_and_cloud',
  [WeatherType['Sky Coverage Increasing']]: 'sun_and_cloud',
  [WeatherType['Sky Unchanged']]: 'sun',
  [WeatherType['Smoke Or Haze']]: 'sun_and_fog',
  [WeatherType['Snow']]: 'snow',
  [WeatherType['Snow And Rain Showers']]: 'snow',
  [WeatherType['Snow Showers']]: 'snow',
  [WeatherType['Squalls']]: 'wind',
  [WeatherType['Thunderstorm']]: 'lightning',
  [WeatherType['Thunderstorm Without Precipitation']]: 'sun_and_lightning',
}

export type Props = {
  weatherType: WeatherType
  width: number
  height: number
}

export const WeatherIcon: React.FC<Props> = ({
  weatherType,
  width,
  height,
}) => {
  return (
    <Image
      src={`/icons/${iconsMap[weatherType]}.svg`}
      width={width}
      height={height}
      alt={WeatherType[weatherType]}
      unoptimized
    />
  )
}
