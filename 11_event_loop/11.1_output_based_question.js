// JS is a single threaded language , so it can't work on more than one thing at a time. Thus Event loop is a concept used by it to tackle the problem of asyncrnous code

// Event loop act as a traffic controller , helps to execute sync & asycn code efficiently

// Call stack => place where code is gone & get executed in event loop

// Task Queue => async code like setTimeout , dom interactions end up & then once sync code & micro task queue is empty , then these elements are pushed to call stack.

// Microtask queue manages promised , mutation observers => more priority task than task queue

// -------------------------------------
// Q1: Predict Output

// console.log("1"); // Sync code
// console.log("2"); // Sync code
// console.log("3"); // Sync code

// OUTPUT :
// 1
// 2
// 3

// ----------------------------------------

// Q2.

// console.log(1);
// // Below is an async code i.e from browser web api => will go in task queue
// setTimeout(() => {
//   console.log(2);
// }, 3000);
// console.log(3);

// OUTPUT :
// 1
// 3
// 2

// --------------------------------------------

// Q3 :

// console.log(1);
// // Even if the delay is 0 , it will execute at last since it is pushed into task queue & first sync code will run in call stack
// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);

// OUTPUT :
// 1
// 3
// 2
// ------------------------------

// Q4 :

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then(function a(response) {
//     console.log("Fetch Completed ", response[0]);
//   })
//   .catch(function (error) {
//     console.log("Fetch Error", error);
//   });

// Promise.resolve().then(function b() {
//   console.log("Promise Resolved");
// });

// Promise.reject().catch(function c() {
//   console.log("Promise Rejected");
// });

// OUTPUT :
// Promise Resolved
// Promise Rejected
// Fetch Completed  {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }

// --------------------------------------------

// Q5 :

// console.log("start");
// setTimeout(() => {
//   console.log("Inside SetTimeout task Queue");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Inside Promise Microtask Queue");
// });
// console.log("end");

// start
// end
// Inside Promise Microtask Queue
// Inside SetTimeout task Queue

// ----------------------------------------

// Q6 :

// blockMainThread();

// console.log("start");

// function blockMainThread() {
//   const start = Date.now();
//   while (Date.now() - start < 3000) {} // this code blocks the code execution for 3 sec
//   console.log("running");
// }
// console.log("end");

// OUTPUT :
// running
// start
// end
