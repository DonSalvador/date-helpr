function isObject (date) {
  return typeof date === 'object'
}

function getValidateDateForSafari (date) {
  return date.replace(new RegExp('-', 'g'), '/')
}

export default function (date) {
  if (isObject(date)) {
    return date
  }
  return getValidateDateForSafari(date)
}