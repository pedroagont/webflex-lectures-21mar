// CALL STACK
const thirdFunction = () => {
  console.log('Hello from third fn! 3️⃣👋')
}

const secondFunction = () => {
  thirdFunction()
  console.log('Hello from second fn! 2️⃣👋')
}

const mainFunction = () => {
  secondFunction()
  console.log('Hello from main fn! 1️⃣👋')
}

mainFunction();
