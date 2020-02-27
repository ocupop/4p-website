import format from 'date-fns/format'

/**
 * Formats a date object
 *
 * @param {DateTime} date
 */
export const formatDate = date => {
  let dateFormated = ''
  if (date) {
    dateFormated = format(new Date(date), 'MMMM dd, yyyy')
  }
  return dateFormated
}

export const objectToArray = object => {
  if (object) {
    return Object.entries(object).map(e => Object.assign({}, e[1], { id: e[0] }))
  }
}

export const formatToPhone = number => {
  const input = number.replace(/\D/g, '').substring(0, 10) // First ten digits of input only
  const zip = input.substring(0, 3)
  const middle = input.substring(3, 6)
  const last = input.substring(6, 10)
  return `(${zip}) ${middle} - ${last}`
}

/**
 * Returns a money amount
 * For more information on Intl.NumberFormat see: https://stackoverflow.com/a/16233919
 *
 * @param {float} Money Amount
 */
export const formatMoney = moneyAmount => {
  const fromatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return fromatter.format(moneyAmount)
}
