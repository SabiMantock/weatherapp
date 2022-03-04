import CityItem from './city-item'

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const City = ({ city }) => {
  const getDate = date => {
    const d = new Date()
    return `${monthNames[d.getMonth()]}  ${new Date(date * 1000).getDay() - 1}`
  }
  const getTime = timeStamp => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getUTCMinutes()}`
  }

  const precipitation = Object.values(city?.rain || { rain: 'empty' })

  return (
    <>
      <CityItem
        name={city?.name}
        description={city?.weather[0]?.description}
        icon={city?.weather[0]?.icon}
        temp={city?.main?.temp}
        time={getTime(city?.dt)}
        date={getDate(city?.dt)}
        wind={city?.wind?.speed}
        humid={city?.main?.humidity}
        preci={precipitation[0] !== 'empty' ? precipitation + 'mm' : '0 mm'}
      />
    </>
  )
}

export default City
