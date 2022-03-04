import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 150px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 9px 21px rgba(70, 167, 183, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 150px;
  }
`

export const TimeWrapper = styled.div`
  margin: 10px;
  @media (max-width: 768px) {
    width: 40px;
    margin: 10px auto;
  }
`

export const Time = styled.div`
  font-size: 15px;
  color: #70757a;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 40px;
    margin: 5px auto;
  }
`

export const Icon = styled.img`
  width: 100%;
`

export const Temp = styled.div`
  font-size: 15px;
  color: #262626;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 40px;
    margin: 0 auto;
    font-size: 13px;
  }
`

export const WindWrapper = styled.div`
  background-color: #e5f6fd;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  color: #70757a;
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 5px;
  }
`

export const Wind = styled.div``
export const Humid = styled.div``

export const Preci = styled.div``
