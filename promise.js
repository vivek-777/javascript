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

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success "), 2000);
  //   setTimeout(() => reject("P1 Fail "), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success "), 1000);
  //   setTimeout(() => reject("P2 Fail "), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success "), 3000);
  //   setTimeout(() => reject("P3 Fail "), 2000);
});

///////////// PROMISE.ALL

Promise.all([p1, p2, p3])
  .then(() => {
    console.log(res);
  })
  .catch((err) => {
    console.error(">>>>>>>", err);
  });

/* If all pass it returns array of response after maximum time taking by any promise */
/* If any promise fail it returns error just after that failed response, not wait for other response */

///////////// PROMISE.ALLSETTLED

Promise.allSettled([p1, p2, p3])
  .then(() => {
    console.log(res);
  })
  .catch((err) => {
    console.error(">>>>>>>", err);
  });

/* It will wait all promises to settled and then return array of response even with any err EX. [res, err, res] */

///////////// PROMISE.RACE

Promise.race([p1, p2, p3])
  .then(() => {
    console.log(res);
  })
  .catch((err) => {
    console.error(">>>>>>>", err);
  });

/* It will return single response as soon as any promise will return response first either its error or response */

///////////// PROMISE.ANY

Promise.any([p1, p2, p3])
  .then(() => {
    console.log(res);
  })
  .catch((err) => {
    console.error(">>>>>>>", err);
  });

/* It will wait to resolve first promise and returns its response , if all rejects it will return array of aggregate error */
/* AggregateError: All promises were rejected */
