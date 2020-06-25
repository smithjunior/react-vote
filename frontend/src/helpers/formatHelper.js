const formatter = Intl.NumberFormat('pt-BR')

const formatNumber = (value) => {
  return formatter.format(value)
}

const formatPercentage = (value) => {
  const stringValue = value.toFixed(2)
  return stringValue.replace('.', ',') + ' %'
}

export { formatNumber, formatPercentage }
