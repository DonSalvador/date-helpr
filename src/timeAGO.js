import safariDateWorkaround from "./safariDateWorkaround"

export default function (date, finalString = 'a go') {
  finalString = finalString ? finalString : ''
  date = safariDateWorkaround(date)
  let seconds = Math.floor((new Date() - date) / 1000)
  let interval = Math.floor(seconds / 31536000)
  if (interval > 1) {
    return interval + ' years ' + finalString
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return interval + ' months ' + finalString
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return interval + ' days ' + finalString
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return interval + ' hours ' + finalString
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return interval + ' minutes ' + finalString
  }
  return 'just now'
}