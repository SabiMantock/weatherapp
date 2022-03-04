import React from 'react'
import { Container } from '../style/hourly'

import { HourlyList } from './hourly-list'

const Hourly = ({ hourly }) => {
  return (
    <Container>
      <HourlyList times={hourly} />
    </Container>
  )
}

export default Hourly
