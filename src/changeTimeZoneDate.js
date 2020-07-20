import safariDateWorkaround from "./safariDateWorkaround"

function getDateByTimeZone (date, newTimeZone) {
  let ok = date.toLocaleString('en-US', {timeZone: newTimeZone})
  return new Date(ok)
}

function getDateDifference (date, newDate) {
  return date.getTime() - newDate.getTime()
}

function getNewDate (date, dateDifference) {
  return new Date(date.getTime() + dateDifference)
}

export default function (dateToChange, newTimeZone) {
  dateToChange = safariDateWorkaround(dateToChange)
  let newTimeZoneDate = getDateByTimeZone(dateToChange, newTimeZone)
  let dateDifference = getDateDifference(dateToChange, newTimeZoneDate)
  return getNewDate(dateToChange, dateDifference)
}