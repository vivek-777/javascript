// const cart = ["apple", "mango", "grapes"];

// const res = createOrder(cart);

// res
//   .then((orderId) => {
//     console.log(orderId);
//   })
//   .catch((err) => console.log(">>>>", err));

// console.log(">>>>>", res);

// function createOrder() {
//   const promise = new Promise((resolve, reject) => {
//     if (!validateCart()) {
//       const err = new Error("Cart Error");
//       reject(err);
//     }
//     const orderId = "123456";
//     if (orderId) {
//       setTimeout(() => {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
// }

// function validateCart() {
//   return true;
// }

////////////////////////////////////////////////////////////PROMISE APIS//////////////////////////////////////////////////////////

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success "), 2000);
//   //   setTimeout(() => reject("P1 Fail "), 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Success "), 1000);
//   //   setTimeout(() => reject("P2 Fail "), 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Success "), 3000);
//   //   setTimeout(() => reject("P3 Fail "), 2000);
// });

///////////// PROMISE.ALL

// Promise.all([p1, p2, p3])
//   .then(() => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(">>>>>>>", err);
//   });

/* If all pass it returns array of response after maximum time taking by any promise */
/* If any promise fail it returns error just after that failed response, not wait for other response */

///////////// PROMISE.ALLSETTLED

// Promise.allSettled([p1, p2, p3])
//   .then(() => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(">>>>>>>", err);
//   });

/* It will wait all promises to settled and then return array of response even with any err EX. [res, err, res] */

///////////// PROMISE.RACE

// Promise.race([p1, p2, p3])
//   .then(() => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(">>>>>>>", err);
//   });

/* It will return single response as soon as any promise will return response first either its error or response */

///////////// PROMISE.ANY

// Promise.any([p1, p2, p3])
//   .then(() => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(">>>>>>>", err);
//   });

/* It will wait to resolve first promise and returns its response , if all rejects it will return array of aggregate error */
/* AggregateError: All promises were rejected */

/////////////////////////////////////ASYNC AWAIT////////////////////////////////////////

const p1 = new Promise((resolve, reject) => {
  console.log("P1 Executor Starts here...");
  // sync code
  //   Simulating a long-running synchronous operation for 10 seconds
  //   const start = Date.now();
  //   while (Date.now() - start < 5000) {
  //     // Busy-wait loop to simulate long-running operation
  //   }
  //   resolve("P1 Success");

  //async code
  setTimeout(() => {
    resolve("P1 Success");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  console.log("P2 Executor Starts here...");
  // Simulating a long-running synchronous operation for 5 seconds
  //   const start = Date.now();
  //   while (Date.now() - start < 10000) {
  //     // Busy-wait loop to simulate long-running operation
  //   }
  //   resolve("P2 Success");

  //async code
  setTimeout(() => {
    resolve("P2 Success");
  }, 10000);
});

async function handleData() {
  console.log("Welcome");

  const val1 = await p1; // JS Engine stops execution here after seeing await and resume execution after promise resolved
  console.log("Namaste Javascript 1");
  console.log(val1);

  const val2 = await p2;
  console.log("Namaste Javascript 2");
  console.log(val2);
}

handleData();
console.log("Some Other Code......");
