import {
  Card,
  CityContent,
  CityName,
  Container,
  Date,
  DateContent,
  Description,
  Humid,
  Icon,
  IconWrapper,
  Preci,
  Row,
  TempContent,
  Temperature,
  Time,
  Wind,
  WindContent
} from '../style/city-item'

const CityItem = ({
  name,
  description,
  icon,
  temp,
  date,
  time,
  wind,
  humid,
  preci
}) => {
  return (
    <>
      <Card>
        <Container>
          <Row>
            <CityContent>
              <CityName>{name}</CityName>
              <Description>{description}</Description>
            </CityContent>
            <TempContent>
              <IconWrapper>
                <Icon
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt='icon'
                />
              </IconWrapper>
              <Temperature>{Math.round(temp)} &deg;C</Temperature>
            </TempContent>
          </Row>
          <Row>
            <DateContent>
              <Date>{date}</Date>
              <Time>{time}</Time>
            </DateContent>
            <WindContent>
              <Wind>Wind: {wind} m/s</Wind>
              <Humid>Humidity: {humid} % </Humid>
              <Preci>Precipitation (3h): {preci} </Preci>
            </WindContent>
          </Row>
        </Container>
      </Card>
    </>
  )
}

export default CityItem
