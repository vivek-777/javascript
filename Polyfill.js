var arr = [1, 2, 4, 8, 10];


// ---------------------------------------------FOR EACH ------------------------------------------------//

// for each is used for array iteration and some action and return undefined
// arr.forEach(callback(current value, index, arr))

// arr.forEach((element, index, arg) => { console.log(element, index, arg) })

// Array.prototype.myForEach = function(callback){
//   for(let index = 0; index<this.length; index++){
//     callback(this[index], index, this);
//   }
// }

// arr.myForEach((x)=> console.log(x));


// ---------------------------------------------MAP------------------------------------------------//

//Map is used to transform the array element and return them in a new array;
//arr.map(callback(current value, index, arr))

// arr.map((element, index, arr) => { 
//   console.log(element, index, arr) 
//   return x;
// })

// Array.prototype.myMap = function(callback){
//   let result = [];
//   for(let index = 0; index<this.length; index++){
//     let res = callback(this[index], index, this);
//     result.push(res);
//   }
//   return result;
// }

// let response = arr.myMap((x)=> x * 2);
// console.log(response)


// ---------------------------------------------FILTER------------------------------------------------//

//Filter methods creates and return new array with all elements that pass the test implemented by the provided function
//arr.filter(callback(current value, index, arr))

// arr.filter(element => element > 4)

// Array.prototype.myFilter = function(callback){
//   let result = [];
//   for(let index = 0; index<this.length; index++){
//     let res = callback(this[index], index, this);
//     if(res) result.push(this[index])
//   }
//   return result;
// }

// let response = arr.myFilter((x)=> x > 2);
// console.log(response)


// ---------------------------------------------FIND------------------------------------------------//

// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// arr.find(callback(current value, index, arr))

// arr.find(element => element > 4)

// Array.prototype.myFind = function(callback){
//   for(let index = 0; index<this.length; index++){
//     let res = callback(this[index], index, this);
//     if(res) {
//       return this[index];
//     }
//   }
// }

// let response = arr.myFind((x)=> x > 2);
// console.log(response)


// ---------------------------------------------REDUCE------------------------------------------------//

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, 
// in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.

// let result = arr.reduce((acc, value, index, arr) => { return acc + value }, 0);

// Array.prototype.myReduce = function(callback, initialValue){
//   let accumulator = initialValue;
//   for(let index = 0; index< this.length; index++){
//     accumulator = callback(accumulator, this[index], index, this);
//   }
//   return accumulator;
// }

// let result = arr.myReduce((acc, value, index, arr) => { return acc + value }, 0);

// console.log("=================>", result);