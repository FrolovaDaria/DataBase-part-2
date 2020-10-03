const obj = {
  first: 1,
  second: 2,
}

const first = obj.first
const secondA = obj.second
console.log(first)
console.log(secondA)

const { first: firstL, second } = obj
console.log(first)
console.log(second)
