// CALLBACK QUEUE

// Higher order function
const mainFunction = (function1, function2) => {
  function1();
  function2();
};

// Callbacks declaration
const iAmCallback1 = () => {
  console.log('Hello from callback 1! 1️⃣👋');
};

const iAmCallback2 = () => {
  console.log('Hello from callback 2! 2️⃣👋');
};

// Invoking
mainFunction(iAmCallback1, iAmCallback2);
