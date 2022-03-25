// PROBLEM:
// Write a node program that takes in an unlimited number of command line arguments
// and prints out the sum of them.
// If any argument is not a number, skip it.
// Do not support negative numbers though.

// NOTES
// We need an array to store the passed values/arguments
// We need to access command line arguments (process.argv ?)
// We need a for loop / iterator to properly sum each passed value/arguments
// We need conditional statements to validate number data types and negative values
// STRETCH: We could create a function to invoke it with different arrays if needed

// const myArray = [1, 'hello', 3, true, '5', -30, 5.5, '2.9']

// C version of a for loop
// for (let i=0; i<myArray.length; i++) {
//   console.log(myArray[i])
// }

// JS version of a for loop
// for (let element of myArray) {
//   console.log(element);
// }

// forEach() version of a for loop
// myArray.forEach((element, index) => {
//   console.log(element, index)
// })

const sumAllNumbersInArray = function(array){
  let total = 0;

  for (const element of array) {
    const number = Number(element)
    const absolute = Math.abs(number)
    
    if(absolute > 0) {
      total = total + absolute
    }
  }

  return total;
}

const commandLineArgs = process.argv
console.log(sumAllNumbersInArray(commandLineArgs))
