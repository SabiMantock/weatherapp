import styled from 'styled-components'


export const Container = styled.div`
  margin: 25px 0;
  text-align: center;
`
export const Select = styled.select`
  width: 100%;
  max-width: 800px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-left: 25px;
  color: #262626;
  font-size: 13px;
  @media (max-width: 768px) {
    width: 96%;
  }
`

export const Option = styled.option`
  font-size: 13px;
`
