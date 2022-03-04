import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

export const getWeatherData = async (fn1, fn2) => {
  const tampere = `http://api.openweathermap.org/data/2.5/weather?id=634963&appid=${API_KEY}&units=metric`
  const jyv = `http://api.openweathermap.org/data/2.5/weather?id=655195&appid=${API_KEY}&units=metric`
  const kuo = `http://api.openweathermap.org/data/2.5/weather?id=650225&appid=${API_KEY}&units=metric`
  const esp = `http://api.openweathermap.org/data/2.5/weather?id=660129&appid=${API_KEY}&units=metric`

  const tampHourly = `https://api.openweathermap.org/data/2.5/onecall?lat=61.4991&lon=23.7871&exclude=daily,current,minutely&appid=${API_KEY}&units=metric`
  const jyvHourly = `https://api.openweathermap.org/data/2.5/onecall?lat=62.2081&lon=25.6074&exclude=daily,current,minutely&appid=${API_KEY}&units=metric`
  const kuoHourly = `https://api.openweathermap.org/data/2.5/onecall?lat=62.8818&lon=27.6894&exclude=daily,current,minutely&appid=${API_KEY}&units=metric`
  const espHourly = `https://api.openweathermap.org/data/2.5/onecall?lat=60.25&lon=24.6667&exclude=daily,current,minutely&appid=${API_KEY}&units=metric`
  const endpoints = [
    tampere,
    jyv,
    kuo,
    esp,
    tampHourly,
    jyvHourly,
    kuoHourly,
    espHourly
  ]

  const data = await Promise.all(endpoints.map(endpoint => axios.get(endpoint)))

  let upperBound = 0
  let lowerBound = 4
  let batchData = []
  for (let i = 0; i < data.length; i++) {
    if (upperBound === 4) {
      return
    }
    batchData.push({
      primary: data[upperBound].data,
      secondary: data[lowerBound].data
    })
    upperBound++
    lowerBound++

    fn1(batchData)
    fn2(batchData)
  }
}
