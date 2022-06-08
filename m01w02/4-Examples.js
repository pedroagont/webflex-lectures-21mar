// SIMPLE MESSAGE CALLBACK EXAMPLE
// Higher order function
const welcomeUser = (callback, username) => {
  callback(username);
};

// Callbacks declaration
const completeDataMessage = username => {
  console.log(`Welcome ${username}! Your profile is completed!`);
};

const missingDataMessage = username => {
  console.log(`Welcome ${username}! Your profile is missing some data!`);
};

// Invoking
welcomeUser(completeDataMessage, 'Pedro');
welcomeUser(missingDataMessage, 'Megan');

// MATH RESULT CALLBACK EXAMPLE
// Higher order function
const mathOperation = (val1, val2, callback) => {
  return callback(val1, val2);
};

// Callbacks declaration
const sum = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// Invoking
const result = mathOperation(18, 15, divide);
console.log(result);
