console.log('--Question 1--')
// Problem: Write a function that takes an array of items as its argument. The function should return a list of items that don't have a pair. For example, if the argument is [1, 1, 2, 3, 4, 2] the function should return [3, 4]. If the argument is ['a', 'a', 'a', 'b', 'b'] the function should return ['a'].

// Solution:

console.log(dontHavePair([1, 1, 2, 3, 4, 2]))
console.log(dontHavePair(['a', 'a', 'a', 'b', 'b']))

function dontHavePair(arr) {
  // console.log(arr)
  // start with a frequency counter to see how many times each item appears in array
  let counter = {}
  let answer = []
  for (let val of arr) {
    // loop over array and count item appearances
    counter[val] = ( counter[val] || 0 ) + 1
  }
  // console.log(counter)
  for (let key in counter) {
    // loop over counter object, check if key:value is odd/even
    // console.log(counter[key])
    if (counter[key] % 2 === 1) {
      // if odd, doesn't have a pair, so add to list
      // console.log(key)
      answer.push(key)
    }
  }
  return answer
}

// this is returning the numbers as an array of strings...but I'm close! 
console.log('--------------')

console.log('--Question 2--')
// Problem: Write a function that takes an array of objects as its argument. Each object has an id: number, firstName: string, lastName: string, phone: number, and contactType: enum of 'personal' | 'professional' | 'other'. The function should organize the incoming argument and return the data organized by contactType (i.e. all personal contacts are listed together, all other contacts are listed together, etc)

// Solution:
const contacts = [
  { id: 1, firstName: 'Sean', lastName: 'Watson', phone: 5555555555, contactType: 'personal' },
  { id: 2, firstName: 'Sean', lastName: 'Watson', phone: 5555555555, contactType: 'professional' },
  { id: 3, firstName: 'David', lastName: 'Barbour', phone: 5555555555, contactType: 'personal' },
  { id: 4, firstName: 'Colby', lastName: 'Foss', phone: 5555555555, contactType: 'other' },
  { id: 4, firstName: 'Jamie', lastName: 'Karlovich', phone: 5555555555, contactType: 'other' },
  // { id: 4, firstName: 'Kyle', lastName: 'Watson', phone: 5555555555, contactType: 'professional' },
]

console.log(byContact(contacts))

function byContact(arr) {
  // collect data by category
  let organized = {
    personal: [],
    professional: [],
    other: []
  }
  // map over the array
  for (let object of arr) {
    // console.log(object.contactType)
    // if personal, add to personal, if professional, etc
    if (object.contactType === 'personal') {
      // organized['personal'].push(object)
      organized.personal.push(object)
    } else if (object.contactType === 'professional') {
      organized.professional.push(object)
    } else if (object.contactType === 'other') {
      organized.other.push(object)
    }
  }
  // console.log(organized.personal)
  // console.log(organized.professional)
  // console.log(organized.other)
  
  // return final list
  return organized
}

console.log('--------------')