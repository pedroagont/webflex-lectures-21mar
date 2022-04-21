# M01W02 - Callbacks
- [ ] Real world scenario
- [ ] Sync vs Async: What is a callback?
- [ ] How NodeJS works?
    - [ ] Eventloop
    - [ ] Call stack
    - [ ] Call back queue
- [ ] Simple examples
- [ ] Useful links

#### Video
[https://vimeo.com/697758977/896f966935](https://vimeo.com/697758977/896f966935)


## Real world scenario
**Airport foodcourt example**
- We go to a restaurant
- We ask for a meal and pay
- Then we have 2 options:
  - We could wait for the food to be finished, meaning we are stuck
  - We go for a walk, buy souvenirs, when our food is done we are *called back*

![Airport foodcourt](http://epmgaa.media.clients.ellingtoncms.com/img/photos/2013/10/02/Best_airport_food_court_-_Concourse_F_food_court.jpg)

## Sync VS Async
Executing things in sequence works well in javascript. But especially those operations such as fetching a file from the network, accessing a database and returning data from it, accessing a video stream from a webcam, or execute a function with a delay, the result of such operations can't be returned immediately. Sometimes it is unknown how much time it will take to fetch from a server, or it needs to execute after a specified time.
But what if we may not want the javascript engine to halt the execution of the other sequential code. So, the javascript engine needs to manage things a bit more efficiently in this case and execute asynchronously.

#### Synchronous
JavaScript is synchronous by default and is single threaded. This means that code cannot create new threads and run in parallel. Lines of code are executed in series, one after another in a sequential manner.

#### Asynchronous
Asynchronous means that things can happen independently of the main program flow. Computers are asynchronous by design.

*NOTE:*
*Javascript gives preference to synchronous processes and puts asynchronous processes in a different part, which allows tasks to be executed properly and without interruption.*

#### What is a callback?
A callback is a function used as an argument for another function. This callback executes after an asynchronous operation finishes. A callback can be synchronous as well as asynchronous.


## How Javascript works?
Javascript is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

![NodeJS engine](https://miro.medium.com/max/1400/1*iHhUyO4DliDwa6x_cO5E3A.gif)

#### Memory heap
This is where all the memory allocation happens for the variables that you have defined in your program.

#### Event loop
The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading.

#### Call stack
The call stack is responsible for keeping track of all the operations in line to be executed. Functions are pushed and executed one by one as the interpreter reads your program, and gets popped out once the execution is done.

#### Callback queue
This is where your asynchronous code gets pushed to, and waits for the execution. The callback queue is responsible for sending new functions to the callstack for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution.

## Useful links:
- [Video: Jake Archibald: In the loop - JSCONF Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
- [The Node.js Event Loop](https://nodejs.dev/learn/the-nodejs-event-loop)
- [JavaScript Asynchronous Programming and Callbacks](https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks)
- [Freecodecamp.org - Synchronous vs Asynchronous JavaScript](https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/)
