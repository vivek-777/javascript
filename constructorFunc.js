// // constructor function
// function Person () {
//   this.name = 'John',
//   this.age = 23
// }

// // create an object
// const person = new Person();

// console.log(person)

/////////////////////////////////////////////////////////////////////


// // constructor function
// function Person (person_name, person_age, person_gender) {

//   // assigning  parameter values to the calling object
//    this.name = person_name,
//    this.age = person_age,
//    this.gender = person_gender,

//    this.greet = function () {
//        return ('Hi' + ' ' + this.name);
//    }
// }


// // creating objects
// const person1 = new Person('John', 23, 'male');
// const person2 = new Person('Sam', 25, 'female');

// // accessing properties
// console.log(person1.name); // "John"
// console.log(person2.name); // "Sam"


///////////////////////////////////////////////////////////////////////////

// 1.Object Literal is generally used to create a single object. The constructor function is useful if you want to create multiple objects. For example,
// 2.Each object created from the constructor function is unique. You can have the same properties as the constructor function or add a new property to one particular object. For example,
// if an object is created with an object literal, and if a variable is defined with that object value, any changes in variable value will change the original object.


// using object literal
// let person = {
//   name: 'Sam'
// }

// // using constructor function
// function Person () {
//   this.name = 'Sam'
// }

// let person1 = new Person();
// let person2 = new Person();


/////////////////////////////////////////////////////////////////////////////

//You can also add properties and methods to a constructor function using a prototype.

// // constructor function
// function Person () {
//   this.name = 'John',
//   this.age = 23
// }

// // creating objects
// let person1 = new Person();
// let person2 = new Person();

// // adding new property to constructor function
// Person.prototype.gender = 'Male';

// console.log(person1.gender); // Male
// console.log(person2.gender); // Male



///////////////////////////////////////////////////////////////////////////////////

// constructor function
// function Person() {
//   this.name = 'John'
// }

// // add a property
// Person.prototype.age = 20;

// // creating an object
// const person1 = new Person();

// console.log(person1.age); // 20

// // changing the property value of prototype
// Person.prototype = { age: 50 }

// // creating new object
// const person3 = new Person();

// console.log(person3.age); // 50
// console.log(person1.age); // 20


///////////////////////////////////////////////////////////////////////////////

// constructor function
// function Person() {
//   this.name = 'John'
// }

// // add a property
// Person.prototype.age = 20;

// // creating an object
// const person1 = new Person();

// console.log(person1.age); // 20

// // changing the property value of prototype
// Person.prototype.age = 50

// // creating new object
// const person3 = new Person();

// console.log(person3.age); // 50
// console.log(person1.age); // 50


//////////////////////////////////////////////////////////////

//If an object tries to access the same property that is in the constructor function and the prototype object, the object takes the property from the constructor function. For example,

// function Person() {
//   this.name = 'John'
// }

// // adding property 
// Person.prototype.name = 'Peter';
// Person.prototype.age = 23

// const person1 = new Person();

// console.log(person1.name); // John
// console.log(person1.age); // 23


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let arr = [ 'Akshay' , 'Aditya' ]

// let object = {
//   name: 'Akshay',
//   city: 'Dehradun',
//   getIntro: function(){
//     console.log(this.name + ' from ' + this.city);
//   }
// }

// function fun(){
//   //
// }