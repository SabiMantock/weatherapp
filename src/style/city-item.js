import styled from 'styled-components'

const Card = styled.div`
  width: 100%;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  height: 150px;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 9px 21px rgba(70, 167, 183, 0.06);
  @media (max-width: 768px) {
    width: 80%;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`

const CityContent = styled.div`
  /* padding: 20px; */
`

const CityName = styled.h3`
  margin: 0;
  font-size: 19px;
  color: #262626;
`

const Description = styled.p`
  margin: 0;
  font-size: 13px;
  color: #70757a;
`

const TempContent = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 50px;
`

const IconWrapper = styled.div`
  max-width: 80px;
`

const Icon = styled.img`
  width: 100%;
`

const Temperature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 26px;
  color: #262626;
  margin: 0;
  font: Arial;
`

const DateContent = styled.div`
  align-self: flex-end;
`

const WindContent = styled.div`
  text-align: right;
`

const Date = styled.h3`
  font-size: 15px;
  margin: 0;
`

const Time = styled.p`
  margin: 0;
  color: #70757a;
  font-size: 13px;
`

const Wind = styled.p`
  margin: 0;
  font-size: 13px;
  color: #70757a;
`

const Humid = styled.p`
  margin: 0;
  font-size: 13px;
  color: #70757a;
`

const Preci = styled.p`
  margin: 0;
  font-size: 13px;
  color: #70757a;
`

export {
  Card,
  Container,
  Row,
  CityContent,
  CityName,
  Description,
  TempContent,
  IconWrapper,
  Icon,
  Temperature,
  DateContent,
  WindContent,
  Date,
  Time,
  Wind,
  Humid,
  Preci
}
