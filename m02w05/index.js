const getRandomNumberPromise = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);

    randomNumber > 5
      ? resolve(randomNumber)
      : reject(
        new Error(
          `Error: Im sorry, your number ${randomNumber} is less than 5`
        )
      );
  });
};

// To access the promise return value, we use the .then() syntax, could even chain more then methods to do more things after the promise is resolved
getRandomNumberPromise()
  .then(randomNumber => randomNumber * 2)
  .then(randomNumberTimes2 => console.log(randomNumberTimes2))
  .then(() => console.log('All done!'))
  .catch(error => console.log(error));

// Another way to access the value of a promise is by wrapping it into an async/await function:
const getRandomNumberPromiseAsyncAwait = async() => {
  try {
    const randomNumber = await getRandomNumberPromise();
    console.log(randomNumber);
  } catch (err) {
    console.log(err);
  }
};

getRandomNumberPromiseAsyncAwait();
