export enum WeatherType {
  'Blowing Or Drifting Snow',
  'Clear',
  'Diamond Dust',
  'Drizzle',
  'Duststorm',
  'Fog',
  'Freezing Drizzle/Freezing Rain',
  'Freezing Fog',
  'Funnel Cloud/Tornado',
  'Hail Showers',
  'Hail',
  'Heavy Drizzle',
  'Heavy Drizzle/Rain',
  'Heavy Freezing Drizzle/Freezing Rain',
  'Heavy Freezing Rain',
  'Heavy Rain And Snow',
  'Heavy Rain',
  'Heavy Snow',
  'Ice',
  'Light Drizzle',
  'Light Drizzle/Rain',
  'Light Freezing Drizzle/Freezing Rain',
  'Light Freezing Rain',
  'Light Rain And Snow',
  'Light Rain',
  'Light Snow',
  'Lightning Without Thunder',
  'Mist',
  'Overcast',
  'Partially cloudy',
  'Precipitation In Vicinity',
  'Rain Showers',
  'Rain',
  'Sky Coverage Decreasing',
  'Sky Coverage Increasing',
  'Sky Unchanged',
  'Smoke Or Haze',
  'Snow And Rain Showers',
  'Snow Showers',
  'Snow',
  'Squalls',
  'Thunderstorm Without Precipitation',
  'Thunderstorm',
}

export type WeatherData = {
  weatherType: WeatherType | null
  temperature: number
  date: string
  wind: number
  humidity: number
}

export enum DataStatus {
  notFetched = 'NOT_FETCHED',
  loading = 'LOADING',
  ready = 'READY',
  error = 'ERROR',
}
