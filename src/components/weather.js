import { useEffect, useState } from 'react'
import { Container } from '../style/weather'
import { filter } from '../utils/fetch'
import { getWeatherData } from '../utils/getWeatherData'
import City from './city'

import DropDown from './dropDown'
import Hourly from './hourly'

const Weather = () => {
  const [weather, setWeather] = useState([])
  const [selected, setSelected] = useState('Kaikki kaupungit')
  const [loading, setLoading] = useState(false)
  const [filtered, setFiltered] = useState([])

  const filterChangeHandler = selectedCity => {
    setSelected(selectedCity)
  }

  const fetchWeatherData = async () => {
    try {
      await getWeatherData(setWeather, setFiltered)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      if (weather.length === 0) {
        setLoading(true)
        await fetchWeatherData()
        setLoading(false)
        return
      }
      filter(selected, setFiltered, weather)
    })()
  }, [selected, weather])

  if (loading) return <p>Loading</p>

  return (
    <>
      <DropDown selectedCity={selected} onChangedCity={filterChangeHandler} />
      {filtered.map(({ primary, secondary }, index) => (
        <Container key={index}>
          <City city={primary} />
          <Hourly hourly={secondary} />
        </Container>
      ))}
    </>
  )
}

export default Weather
