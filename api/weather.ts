import axios from 'axios'
import addDays from 'date-fns/addDays'
import { WeatherData } from 'types/global'

export type GetWeatherDataPayload = {
  city: string
  date: Date
  days?: number
}

export const getWeatherData = async ({
  city,
  date,
  days = 5,
}: GetWeatherDataPayload) => {
  const startDate = addDays(date, -days + 1)

  const { data } = await axios.get<WeatherData[]>('/api/weather', {
    params: {
      city,
      startDate: startDate.toISOString(),
      endDate: date.toISOString(),
    },
  })

  return data
}
