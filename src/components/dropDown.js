import { Container, Option, Select } from '../style/dropDown'

const DropDown = ({ selectedCity, onChangedCity }) => {
  const dropDownHandler = e => {
    onChangedCity(e.target.value)
  }

  return (
    <Container>
      <Select value={selectedCity} onChange={dropDownHandler}>
        <Option value='Kaikki kaupungit'>Kaikki kaupungit</Option>
        <Option value='Tampere'>Tampere</Option>
        <Option value='Jyvaskyla'>Jyväskylä</Option>
        <Option value='Kuopio'>Kuopio</Option>
        <Option value='Espoo'>Espoo</Option>
      </Select>
    </Container>
  )
}

export default DropDown
