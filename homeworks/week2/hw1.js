function printStars(n) {
  if (typeof n !== 'number') {
    const errMsg = '"n" should be a number'
    console.log(errMsg)
    return Error(errMsg)
  }
  if (n % 1) {
    const errMsg = '"n" should be an integer'
    console.log(errMsg)
    return Error(errMsg)
  }
  if (n < 1 || n > 30) {
    const errMsg = '"n" should in 1 to 30'
    console.log(errMsg)
    return Error(errMsg)
  }
  for (let i = 0; i < n; i += 1) {
    console.log('*')
  }
  return 'Completed'
}

printStars('1234')
printStars(0)
printStars(5)
printStars(6.6)
printStars(31)
