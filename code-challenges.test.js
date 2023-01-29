// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("stringMaker", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(stringMaker(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.

// PSEUDOCODE

// Create a function called "stringMaker" with a parameter for an object
// Map through each element in the array. Each element in this array is an object
// We only need to change the name value, so we will split the name value so we can modify its contents
// After we split the name value, he have the first and last names as their own elements in a new array
// We need to capitalize the first character of the first name string and add all of the original characters of the string back to have the capitalized first name
// Repeat the same step for the second name
// Use string interpolation to create the requested sentence using the occupation value from the original object
// Return the final result

const stringMaker = (array) => {
  return array.map((object) => {
    let name = object.name.split(" ")
    let firstName = name[0][0].toUpperCase() + name[0].slice(1)
    let lastName = name[1][0].toUpperCase() + name[1].slice(1)
    return `${firstName} ${lastName} is ${object.occupation}.`
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("mixedRemainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(mixedRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(mixedRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

// PSEUDOCODE

// Delcare a function called "mixedRemainders" that takes an array as a parameter
// Filter the inputted array so only numbers remain
// Map through the new array with the modulo operator so the output is only remainders
// Return the result
// I'm using the "function" syntax just to try new things

function mixedRemainders(array) {
  return array.filter(item => typeof item === "number").map(item => item % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("arrayCubeSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(arrayCubeSum(cubeAndSum1)).toEqual(99)
    expect(arrayCubeSum(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

// Declare a function called "arrayCubeSum" that takes an array as a parameter
// Use the reduce method to go through each item in the array
// Starting at zero, use each item's cube value and add that to zero until all items have been processed
// Return the result

function arrayCubeSum(array) {
  return array.reduce((total, item) => item ** 3 + total, 0)
}
