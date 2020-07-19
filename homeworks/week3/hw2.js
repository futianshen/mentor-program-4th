const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
})

const lines = []

rl.on('line', line => lines.push(line))

const isNarcissistic = (number) => {
  const digits = number.toString().length
  return number === number
    .toString()
    .split('')
    .map(val => Number(val) ** digits)
    .reduce((acc, val) => acc + val)
}

const solve = (input) => {
  const [min, max] = input[0].split(' ').map(Number)
  for (let i = min; i <= max; i += 1) {
    if (isNarcissistic(i)) {
      console.log(i)
    }
  }
}

rl.on('close', () => solve(lines))
