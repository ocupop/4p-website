import { format } from 'date-fns'
import { point, polygon, booleanPointInPolygon } from '@turf/turf'
import kmlFile from '../lib/kml.json'

export const formatMoney = (
  amount,
  currency = '$',
  decimalCount = 0,
  decimal = '.',
  thousands = ','
) => {
  try {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

    const negativeSign = amount < 0 ? '-' : ''

    const i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString()
    const j = i.length > 3 ? i.length % 3 : 0

    return (
      currency +
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    )
  } catch (e) {
    console.log('Error formatting value:', e)
  }
}

export const toCamel = (str) => {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '')
  })
}

export const toSnake = (str) => {
  return str.replace('-', '_')
}

export const sortBy = ({ solutions, indicator }) => {
  const sortedArray = solutions.sort((a, b) => {
    const valueA = a.data.find((metric) => metric.indicator == indicator).value
    const valueB = b.data.find((metric) => metric.indicator == indicator).value
    return valueA < valueB ? 1 : -1
  })

  return sortedArray
}

export const getIndicatorValue = (data, indicator) => {
  return data.find((metric) => metric.indicator == indicator).value
}

export const liquidToJSON = (liquidString) => {
  return JSON.parse(
    liquidString
      .replace(/=>/g, ': ')
      .replace(/(\s)nil(\s|,)/g, '"nil",')
      .replace(/Liquid::ImageDrop/g, '"Liquid::ImageDrop"')
      .replace(/\}(|\s+){/g, '},{')
  )
}

export const abbreviateNumber = (num, fixed) => {
  if (num === null) {
    return null
  } // terminate early
  if (num === 0) {
    return '0'
  } // terminate early
  fixed = !fixed || fixed < 0 ? 0 : fixed // number of decimal places to show
  var b = num.toPrecision(2).split('e'), // get power
    k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
    c =
      k < 1
        ? num.toFixed(0 + fixed)
        : (num / Math.pow(10, k * 3)).toFixed(fixed), // divide by power
    d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
    e = d + ['', 'K', 'M', 'B', 'T'][k] // append power
  return e
}

export const objectToArray = (object) => {
  if (object) {
    return Object.entries(object).map((e) =>
      Object.assign({}, e[1], { id: e[0] })
    )
  }
}

export const convertArrayToObject = (array, key) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item
    }
  }, initialValue)
}

export const formatTotals = (totals) => {
  const formattedTotals = totals.map((total) => {
    const key = toCamel(total.indicator)
    const indicator = INDICATOR_MAP[key]
    const { prefix, label, show } = indicator
    // const fixed = prefix === '$' ? 0 : 1
    const fixed = 1
    const formattedValue = abbreviateNumber(total.value, fixed)

    return { key, show, prefix, label, formattedValue }
  })

  return convertArrayToObject(formattedTotals, 'key')
}

export const getIndicatorOptions = () => {
  const options = Object.entries(INDICATOR_MAP).map((e) =>
    Object.assign({}, e[1], { id: e[0] })
  )

  return options
}

export const formatDate = (date) => {
  const testDate = date.replace(' 00:00:00 +0000', '')
  if (Date.parse(testDate)) {
    return format(new Date(testDate), 'MMMM dd, yyyy')
  }
  return ''
}

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let savedParams = window.sessionStorage.getItem('utm')

const trackedUrlParams = {
  utm_medium: urlParams.get('utm_medium'),
  utm_source: urlParams.get('utm_source'),
  utm_campaign: urlParams.get('utm_campaign'),
  utm_content: urlParams.get('utm_content'),
  utm_term: urlParams.get('utm_term')
}

const activeParams = Object.keys(trackedUrlParams)
  .filter((k) => trackedUrlParams[k] != null)
  .reduce((a, k) => ({ ...a, [k]: trackedUrlParams[k] }), {})

if (!savedParams && Object.keys(activeParams).length !== 0) {
  window.sessionStorage.setItem('utm', JSON.stringify(activeParams))
  savedParams = window.sessionStorage.getItem('utm')
}

export function storeLinks() {
  const links = Array.from(document.getElementsByClassName('storeLink'))
  links.map((link) => {
    const linkRef = link.href
    const sessionParams = JSON.parse(savedParams)
    link.href = `${linkRef}?${new URLSearchParams(sessionParams).toString()}`
  })
}

export const getGeoLocationByIp = () => {
  const location = window.navigator && window.navigator.geolocation

  return new Promise((resolve, reject) => {
    if (!location) {
      reject('Geolocation is not supported by this browser')
    } else {
      location.getCurrentPosition(
        (position) => {
          resolve([position.coords.latitude, position.coords.longitude])
        },
        (error) => {
          reject(error)
        }
      )
    }
  })
}

const isLocationInBounds = (bounds, coordinates) => {
  const pt = point([bounds[1], bounds[0]])
  const poly = polygon(coordinates)
  const x = booleanPointInPolygon(pt, poly)
  return x
}

export const checkLocation = (bounds) => {
  if (!kmlFile) {
    throw new Error('KML file not found')
  }

  if (!bounds) return false
  console.log('checking bounds', bounds)
  return kmlFile.features.some((feature) => {
    if (feature.geometry.type === 'Polygon') {
      return isLocationInBounds(bounds, feature.geometry.coordinates)
    }
    return false
  })
}
