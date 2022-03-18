import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeatherData, GetWeatherDataPayload } from 'client-api/weather'
import { generateWeatherData } from 'lib/weather'
import { DataStatus, WeatherData } from 'types/global'

export interface WeatherState {
  items: WeatherData[]
  status: DataStatus
  error: string
}

const initialState: WeatherState = {
  items: [],
  status: DataStatus.notFetched,
  error: '',
}

export const getWeatherDataThunk = createAsyncThunk<
  WeatherData[],
  GetWeatherDataPayload
>('weather/getWeatherData', async (payload) => {
  const data = await getWeatherData(payload)
  return data
})

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeatherDataThunk.fulfilled, (state, action) => {
      state.status = DataStatus.ready
      state.items = action.payload
    })
    builder.addCase(getWeatherDataThunk.pending, (state, action) => {
      state.status = DataStatus.loading
      state.error = ''
      state.items = generateWeatherData(action.meta.arg.date)
    })
    builder.addCase(getWeatherDataThunk.rejected, (state, action) => {
      state.status = DataStatus.error
      state.items = []
      state.error = 'Cannot load weather data for these date and city'
    })
  },
})

export default weatherSlice.reducer
