import addDays from 'date-fns/addDays'
import { GetWeatherDataResponse } from 'types/api'
import { WeatherData, WeatherType } from 'types/global'

export const generateWeatherData = (startDate: Date, count = 5) => {
  const result: WeatherData[] = []

  for (let i = 0; i < count; i++) {
    result.push({
      date: addDays(startDate, -i).toISOString(),
      weatherType: null,
      temperature: 0,
      wind: 0,
      humidity: 0,
    })
  }

  return result
}

export const transformWeatherDataFromAPI = (
  data: GetWeatherDataResponse,
  city: string
): WeatherData[] => {
  return data.locations[city].values.map((item) => {
    return {
      temperature: item.temp,
      date: item.datetimeStr,
      wind: item.wspd,
      humidity: item.humidity,
      weatherType:
        WeatherType[item.conditions.split(',')[0] as keyof typeof WeatherType],
    }
  })
}
