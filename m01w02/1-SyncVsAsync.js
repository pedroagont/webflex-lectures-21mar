// Synchronous
// Tasks that are executed in series, by that meaning one after another in a sequential manner.
console.log(1);
console.log(2);
console.log(3);

// Asynchronous
// Tasks that can run independently from the main flow
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
