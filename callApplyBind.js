// let name1 = {
//   firstName: 'Akshay',
//   lastName: 'Saini',
//   printFullName: function(hometown, state){
//     console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + '(' + state + ')');
//   }
// };

// let name2 = {
//   firstName: 'Sachin',
//   lastName: 'Tendulkar',
// }

// //function borrowing
// const abc = name1.printFullName.call(name1, 'dehradun', 'uttrakhand', 'dfdfdf');
// console.log(abc)


///////////////////////////////CALL - APPLY/////////////////////////////////////////

// let printFullName = function(hometown, state){
//   console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + '(' + state + ')');
// }

// let name1 = {
//   firstName: 'Akshay',
//   lastName: 'Saini'
// };

// let name2 = {
//   firstName: 'Sachin',
//   lastName: 'Tendulkar',
// }

// printFullName.call(name1, 'dehradun', 'uttrakhand');
// printFullName.apply(name2, ['dehradun', 'uttrakhand', 'dssddsfds']);


//////////////////////////////////BIND///////////////////////////////////////////////////



// let printMyName = printFullName.bind(name1, 'dehradun', 'uttrakhand');
// printMyName()



////////////////////////////////////Examples//////////////////////////////////////////////////////////



// let pokemon = {
//   firstname: 'Pika',
//   lastname: 'Chu ',
//   getPokeName: function() {
//       let fullname = this.firstname + ' ' + this.lastname;
//       return fullname;
//   }
// };

// let pokemonName = function(snack, hobby) {
//   console.log(this.getPokeName() + 'I choose you!');
//   console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// let logPokemon = pokemonName.bind(pokemon);
// logPokemon('sushi', 'algorithms');



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PROTOTYPE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ****************************** CALL *******************************//

// let name1 = {
//   firstName: 'Akshay',
//   lastName: 'Saini'
// }

// let printMyName = function(hometown, state) {
//   console.log(this.firstName + ' ' + this.lastName + ' ' + hometown + ' ' + state)
// }

// Function.prototype.myOwnCall = function (...args) {
//   const ref = args[0];
//   let myFunction = this;
//   if(ref.constructor === Object){
//     ref.func = myFunction;
//     ref.func(...args.slice(1));
//   }else{
//     myFunction(...args.slice(1))
//   }
// }

// const abc = printMyName.myOwnCall(name1, "abc", "xyz");
// console.log(abc)


// ****************************** APPLY *******************************//


// let name1 = {
//   firstName: 'Akshay',
//   lastName: 'Saini'
// }

// let printMyName = function(hometown, state) {
//   console.log(this.firstName + ' ' + this.lastName + ' ' + hometown + ' ' + state)
// }

// Function.prototype.myOwnApply = function(...args) {
//   const ref = args[0];
//   let myFunction = this;
//   // if(ref.__proto__.__proto__ === null){
//   if(ref.constructor === Object){
//     ref.func = myFunction;
//     ref.func(...args[1]);
//   }else{
//     myFunction();
//   }
// }

// const abc = printMyName.myOwnApply(name1, ["abc", "xyz", 'sfdfd']);
// console.log(abc)


// ****************************** BIND *******************************//

// let name1 = {
//   firstName: 'Akshay',
//   lastName: 'Saini'
// }

// let printMyName = function() {
//   console.log(this.firstName + ' ' + this.lastName)
// }


// // let printName = printMyName.bind(name1);
// // printName();

// Function.prototype.mybind = function(...args) {
//   let obj = this
//   // console.log(args) array of object
//   return function(){
//     obj.call(args[0])
//   }
// }

// let printMyName2 = printMyName.mybind(name1);
// printMyName2();


//////////////////////////////////////////////////

// let name1 = {
//   firstName: 'Akshay',
//   lastName: 'Saini'
// }

// let printMyName = function(hometown, state) {
//   console.log(this.firstName + ' ' + this.lastName + ' ' + hometown + ' ' + state)
// }


// let printName = printMyName.bind(name1);
// printName();

// Function.prototype.mybind = function(...args) {
//   let obj = this
//   let applyArray = args.slice(1)
//   return function(...a){
//     obj.myOwnApply({...args[0]}, [...applyArray, ...a])
//   }
// }

// Function.prototype.mybind = function(...args) {
//   console.log(args[0].constructor === Object)
//   if(args[0].constructor !== Object) args[0] ={} 
//   args[0].func =  this
//   let applyArray = args.slice(1)
//   return function(...a){
//     const abc = [...args.slice(1), ...a]
//     args[0].func(...abc)
//   }
// }

// let printMyName2 = printMyName.mybind(name1, 'dehradun', 'hisar');
// printMyName2("uttrakhand");


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CURRYING~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// 1. Using Bind

// let multiply = function(x, y){
//   console.log(x * y);
// };

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(3) //6

// let multiplyByTwo = multiply.bind(this);
// multiplyByTwo(2, 4) // 8

// let multiplyByTwo = multiply.bind(this, 2, 5);
// multiplyByTwo(4) // 10

// 2. Using Closure

// let multiply = function(x){
//     return function(y){
//       console.log(x * y);
//     }
//   };


// let multiplyByTwo = multiply(2);
// multiplyByTwo(3) //6

// let multiplyByTwo = multiply();
// multiplyByTwo(2, 4) // Nan

// let multiplyByTwo = multiply(2, 5);
// multiplyByTwo(4) // 8




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Debouncing and Throttling~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let counter = 0;

const getData = function() {
  console.log("fetching......", counter++)
}

// const debounce = (fn, d) => {
//   let timer;
//   return function(){
//     let context = this;
//     clearTimeout(timer);
//     timer = setTimeout(()=>{
//       fn.apply(context)
//     }, d)
//   }
// };

// const throttle = (fn, d) => {
//   let timer;
//   let flag = true;
//   return function(){
//     let context = this;
//     if(flag){
//       fn.apply(context)
//       flag = false
//       timer = setTimeout(()=>{
//         flag = true
//         // clearTimeout(timer)
//       }, d);
//     }
//   }
// };

// const betterFunction = throttle(getData, 1000);
// var a;
// let b;

// const c = 5;

// aa = 5
// a = 6
// b = 7;

////////////////////////////////////////////////////////////////////////////////////////////////

// let res;

// const debounce = (fn, d) => {
//   return function() {
//     clearTimeout(res);
//     res = setTimeout(()=>{
//       fn();
//     },d);
//   }
// }

// const throttle = (fn, d) => {
//   let flag = true 
//   return function() {
//     if(flag){
//       fn();
//       flag = false
//       clearTimeout(res);
//       res = setTimeout(()=>{
//         flag = true
//       },d);
//     }
//   }
// }

// const betterFunction = throttle(getData, 1000);

//////////////////////////////////////////////////////////////////////////////////////////////

