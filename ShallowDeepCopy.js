// Shallow copy is a bit-wise copy of an object which makes a new object by copying the memory address of the original object. That is, it makes a new object by which memory addresses are the same as the original object.

// Deep copy, copies all the fields with dynamically allocated memory. That is, every value of the copied object gets a new memory address rather than the original object.

// Now, what a spread operator does? It deep copies the data if it is not nested. For nested data, it deeply copies the topmost data and shallow copies of the nested data.

//=============================SHALLOW COPY==================================

///////////////////////////////////// 1. using = operator

// let userName = {
//   name: "Mayank Gupta",
//   age: 30,
//   designation: "Developer",
//   address: {
//     street: "Rohini",
//     city: "Delhi"
//   },
//   getData:function(){}
// };

// let userDetail = userName;

// userDetail.age = 20
// userDetail.address = {}

// console.log("userName---------->",userName);
// console.log("userDetail---------->",userDetail);


//////////////////////////////////// 2. Copy Objects with “Object.assign”

/* Benefits 
   1. Functions can be copied from source to destination object.
   2. Object.assign can be used to copy multiple object properties.

   Disadvantages
   1. Does not create a deep copy of the source object // maybe incorrect
   2. “Object.assign” cannot copy through non-enumerable properties. // maybe incorrect
   3. Object.assign does not copy prototype properties and methods.
*/ 

// ===>Example 1

// let userDetails = {
//   userName: "Mayank",
//   age: 30,
//   designation: "Developer",
//   getData: function(){}
// }

// Object.defineProperty(userDetails, 'salary',{
//   value: 50000,
//   writable: true,
//   enumerable: false
// })

// var destinationObject = Object.assign(userDetails);

// destinationObject.age = 40;

// console.log('userDetails--------------->', userDetails);
// console.log('destinationObject--------------->', destinationObject);

// ===>Example 2

/*
function Employee() {
  this.name = "Mayank";
  this.age =  20;
  this.showDetails = function() {
    console.dir(this.name)
  }
}

var userDetails = new Employee();

var destinationObject = Object.assign(userDetails);

console.log('userDetails--------------->', userDetails);
console.log('destinationObject--------------->', destinationObject); */

// ===>Example 3

/*
let firstObject = {
  userName: "Mayank",
  age: 30,
  designation: "Developer",
  country: "Nepal"
}

let secondObject = {
  street: "Rohini",
  country: "India"
}

let destinationObject = Object.assign(firstObject, secondObject);

console.log('destinationObject--------------->', destinationObject);*/


/////////////////////////////////// 3. using spread operator

// ===>Example 1
/*
let userDetails = {
  name: "Mayank",
  age: 30,
  designation: "Developer",
  address: {
    street: "Rohini",
    country: "India"
  },
  showDetails: function() {
    console.log("UserName: " + this.name);
  }
}

let destinationObject = {...userDetails};

destinationObject.age = 40
destinationObject.address.country = 'Nepal'

console.log('userDetails--------------->', userDetails);
console.log('destinationObject--------------->', destinationObject);*/


////////////////////////////////////////// 4. For-In loop

/* Benefits 
   1. It’s one of the simplest ways to copy the properties
   2. Copies the user-defined methods to the destination object
   3. We can copy Prototype Functions and Properties

   Disadvantages
   1. It can only Iterate the “enumerable” properties of the object.
   2. Complex objects are copied by reference (no deep copy).
*/ 

// ===>Example 1

// let employeeData = {
//   name: "Vivek",
//   age: 24,
//   designation: "Developer",
//   address: {
//     city: "Mau"
//   },
//   getData: function() {
//     // alert(this.name)
//   }
// }

// let employeeDataCopy = {};

// for(property in employeeData){
//   employeeDataCopy[property] = employeeData[property];
// }

// employeeDataCopy.age = 30
// employeeDataCopy.address.city = "Azamgarh"

// console.log("employeeData---------->",employeeData);
// console.log("employeeDataCopy---------->",employeeDataCopy);

// ===>Example 2

// function Employee(){
//   this.name = 'vivek';
//   this.age = 30;
// }

// Employee.prototype.showData = function(){
//   console.log("User name----->",this.name);
// }

// let userDetails = new Employee();

// let destinationObj = {}

// for(key in userDetails){
//   destinationObj[key] = userDetails[key]
// }

// destinationObj.age = 40

// console.log("userDetails------------->",userDetails);
// console.log("destinationObj------------->",destinationObj);

// ===>Example 3

/*let employeeDetail = {
  name: 'vivek',
}

Object.defineProperty(employeeDetail, 'age',{
  value: 25,
  writable: true,
  enumerable: true
})

Object.defineProperty(employeeDetail, 'salary',{
  value: '50k',
  writable: true,
  enumerable: false
})

let destinationObj = {}

for(key in employeeDetail){
  destinationObj[key] = employeeDetail[key]
}

console.log('employeeDetail------------------->', employeeDetail);
console.log('destinationObj------------------->', destinationObj);*/ //salary not copied

// ===>Example 4

/*let employeeData = {
  name: "Mayank",
  age: 31,
  designation: "Developer",
  address: {
    state: "Delhi",
    country: "India"
  }
}

let destinationObject = {};

for(property in employeeData) {
  destinationObject[property] = employeeData[property];
}

destinationObject.address.state = "Haryana";

console.log('employeeData-------------->', employeeData);
console.log('destinationObject-------------->', destinationObject);*/

/*
  Other Ways to Iterate the Objects in JavaScript

  1. Iterating with Object.keys

  => Object.key does not iterate the prototype property
  => Object.key cannot iterate through non-enumerable properties.

  2. Iterating with Object. getOwnPropertyNames

  => Object.getOwnPropertyNames does not iterate the prototype property
  => It can iterate through non-enumerable properties.
*/


//==============================DEEP COPY===============================

///////////////////////////////////// 1. Use JSON Stringify and JSON Parse

/* Benefits 
   1. It can create deep copy of the object:

   Disadvantages
   1. The method cannot be used to copy the user-defined methods.
   2. This method cannot copy the “non-enumerable” properties.
   3. Cannot copy “prototype” properties and functions of the object.
*/ 

// ===>Example 1

// let userInfo = {
//   name: "Mayank",
//   age: 31,
//   designation: "Developer",
//   address: {
//     streetNumber: 10,
//     city: "Delhi",
//     country: "India"
//   },
//   getData: function(){}
// }

// let stringyfied = JSON.stringify(userInfo);
// let clonedUser = JSON.parse(stringyfied);

// clonedUser.address.city = 'mathura'

// console.log('userInfo--------------->', userInfo);
// console.log('clonedUser--------------->', clonedUser);

// ===>Example 2


/*let employeeData = {
  name: "Mayank",
  age: 31,
  designation: "Developer"
}

Object.defineProperty(employeeData, 'salary', {
  value: 50000,
  enumerable: false
});

let objectString = JSON.stringify(employeeData);
let destinationObject = JSON.parse(objectString);

console.log('=============>',employeeData.propertyIsEnumerable('salary'));
console.log('employeeData--------------->', employeeData.salary);
console.log('destinationObject--------------->', destinationObject);*/

// ===>Example 3

/*
function Employee() {
  this.name = "Mayank";
  this.age =  20;
}

Employee.prototype.showData = function() {
  console.log("User Name: " + this.name)
}

let userDetails = new Employee();

let stringObject = JSON.stringify(userDetails);

let destinationObject = JSON.parse(stringObject);


console.log('userDetails--------------->', userDetails);
console.log('destinationObject--------------->', destinationObject);*/


/////////////////////////////////////////// 2. Using Recursion for Object Copying

// Recursion is the most reliable and effective method to ensure deep copying and maximum scenario coverage. 
// This method cannot copy the “non-enumerable” properties.

// ===>Example 1


// let userDetails = {
//   name: "Mayank",
//   age: 30,
//   designation: "Developer",
//   address: {
//     street: "Rohini",
//     country: "India"
//   }, 
//   showDetails: function() {
//     console.log("UserName: " + this.name);
//   }
// }

// Object.defineProperty(userDetails, 'salary', {
//   value: 50000,
//   enumerable: false
// });

// let destinationObject = {};

function deepCopy(sourceObject, destinationObject) {

  for(key in sourceObject) {
      if(sourceObject[key].constructor !== Object) {
          destinationObject[key] = sourceObject[key];
      } else {
          destinationObject[key] = {};
          deepCopy(sourceObject[key], destinationObject[key]);
      }
  }
}

// deepCopy(userDetails, destinationObject);


// console.log('userDetails--------------->', userDetails);
// console.log('destinationObject--------------->', destinationObject);


let a = {
  b: {
    c: {
      d: ['e']
    }
  },
  f: 'g' 
}

let destination = {}

deepCopy(a, destination);

console.log(destination)
