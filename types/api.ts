import { WeatherType } from './global'

export type WeatherDataFromAPI = {
  temp: number
  datetimeStr: string
  wspd: number
  datetime: number
  humidity: number
  conditions: string
}

export type GetWeatherDataResponse = {
  errorCode?: number
  locations: { [city: string]: { values: WeatherDataFromAPI[] } }
}
