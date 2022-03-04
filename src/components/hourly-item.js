import React from 'react'

import {
  Card,
  Humid,
  Icon,
  Preci,
  Temp,
  Time,
  TimeWrapper,
  Wind,
  WindWrapper
} from '../style/hourly-item'

const HourlyCard = ({ data }) => {
  const getTime = timeStamp => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getUTCMinutes()}`
  }

  const precipitation = Object.values(data?.rain || { rain: 'empty' })

  return (
    <Card>
      <TimeWrapper>
        <Time>{getTime(data.dt)}</Time>
        <Icon
          src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
          alt='icon'
        />
        <Temp>{Math.round(data?.temp)}&deg;C</Temp>
      </TimeWrapper>

      <WindWrapper>
        <Wind>{data?.wind_speed} m/s</Wind>
        <Humid>{data?.humidity} %</Humid>
        <Preci>
          {precipitation[0] !== 'empty' ? precipitation + 'mm' : '0 mm'}
        </Preci>
      </WindWrapper>
    </Card>
  )
}

export default HourlyCard
