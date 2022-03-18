import { configureStore } from '@reduxjs/toolkit'
import weather from './slices/weather'

export const makeStore = () =>
  configureStore({
    reducer: { weather },
  })

export const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
