import Header from './components/header'
import Weather from './components/weather'
import { Container } from './style/app'

function App () {
  return (
    <Container>
      <Header />
      <Weather />
    </Container>
  )
}

export default App
