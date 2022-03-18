import { useAppDispatch, useAppSelector, weatherSlice } from 'app'
import { Modal } from 'components/modal'
import { Tabs, TabData } from 'components/tabs'
import { WeatherDisplayList } from 'components/weather-display-list'
import { useRouter } from 'next/router'
import React from 'react'
import Calendar from 'react-calendar'
import { DataStatus } from 'types/global'

const TAB_PANEL_ID = 'weather-display'
const cities = ['New York', 'London', 'Berlin', 'Paris', 'Tokyo']
const tabs: TabData[] = cities.map((city) => ({
  ariaControls: TAB_PANEL_ID,
  href: { pathname: '/', query: { city } },
  text: city,
}))

const City = () => {
  const router = useRouter()
  const city = Array.isArray(router.query.city)
    ? router.query.city[0]
    : router.query.city
  const selectedCityIndex = cities.indexOf(city || '')
  const [selectedDate, setSelectedDate] = React.useState<null | Date>(null)
  const [modalOpened, setModalOpened] = React.useState(false)
  const weatherState = useAppSelector((state) => state.weather)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (!selectedDate || !city) {
      return
    }

    dispatch(weatherSlice.getWeatherDataThunk({ city, date: selectedDate }))
  }, [city, selectedDate, dispatch])

  React.useEffect(() => {
    if (weatherState.status === DataStatus.error) {
      setModalOpened(true)
    }
  }, [weatherState.status])

  const handleCloseModal = React.useCallback(() => {
    setModalOpened(false)
  }, [])

  return (
    <>
      <Tabs items={tabs} selected={selectedCityIndex} />

      {modalOpened && (
        <Modal title="Error" onClose={handleCloseModal}>
          {weatherState.error}
        </Modal>
      )}

      <div className="flex py-4">
        <div id={TAB_PANEL_ID} role="tabpanel" className="mr-4 shrink grow">
          {[DataStatus.ready, DataStatus.loading].includes(
            weatherState.status
          ) && (
            <WeatherDisplayList
              dataStatus={weatherState.status}
              items={weatherState.items}
            />
          )}
        </div>
        <div className="shrink-0 grow-0">
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            className="rounded-sm border-inherit"
            locale="en-US"
          />
        </div>
      </div>
    </>
  )
}

export default City
