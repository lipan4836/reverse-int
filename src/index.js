module.exports = function reverse (n) {
  let result
  let nString = n.toString()
  if (nString[0] !== '-') {
    result = Array.from(nString).reverse().join('')
  } else {
    result = Array.from(nString).slice(1).reverse().join('')
  }
  return result
}
