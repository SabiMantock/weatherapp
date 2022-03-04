export const filter = (fn1, fn2, fn3) => {
  if (fn1 === 'Kaikki kaupungit') {
    fn2([...fn3])
    return
  }

  if (fn1 === 'Tampere') {
    const selectedCity = fn3[0]
    fn2([selectedCity])
    return
  }

  if (fn1 === 'Jyvaskyla') {
    const selectedCity = fn3[1]
    fn2([selectedCity])
    return
  }
  if (fn1 === 'Kuopio') {
    const selectedCity = fn3[2]
    fn2([selectedCity])
    return
  }

  if (fn1 === 'Espoo') {
    const selectedCity = fn3[3]
    console.log(selectedCity)
    fn2([selectedCity])
    return
  }
}
