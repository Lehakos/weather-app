import { NextApiHandler } from 'next'
import axios from 'axios'
import { GetWeatherDataResponse } from 'types/api'
import { transformWeatherDataFromAPI } from 'lib/weather'

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(404).send('')
    return
  }

  try {
    const { data } = await axios.get<GetWeatherDataResponse>(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history',
      {
        params: {
          aggregateHours: 24,
          contentType: 'json',
          dayStartTime: '0:0:00',
          dayEndTime: '0:0:00',
          key: process.env.API_KEY,
          startDateTime: req.query.startDate,
          endDateTime: req.query.endDate,
          location: req.query.city,
          unitGroup: 'metric',
        },
      }
    )

    if (typeof data.errorCode !== 'undefined') {
      res.status(400).send('')
    } else {
      res
        .status(200)
        .json(transformWeatherDataFromAPI(data, req.query.city as string))
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('')
  }
}

export default handler
