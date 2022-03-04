import HourlyCard from './hourly-item'
import { Container } from '../style/hourlyList'

export const HourlyList = ({ times }) => {
  const threeHourIndexes = [1, 4, 7, 10, 14]

  return (
    <Container>
      {times.hourly.map((data, index) => {
        if (threeHourIndexes.includes(index - 1)) {
          return <HourlyCard key={index} data={data} />
        }
        return null
      })}
    </Container>
  )
}
