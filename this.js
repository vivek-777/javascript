// "use strict";
///////////////////////////////////////////////////////////////// this in global space

// console.log(this); //always refers global object

/////////////////////////////////////////////////////////////////this inside a function

// function x() {
//   // value depends on strict / non strict mode
//   console.log(this); // undefined in strict mode otherwise global object
// }

// x();
// window.x(); //then value becomes refence object in strict mode also. for ex. window object in this case

// this inside non strict mode - this substitution
// if the value of this is null or defined this will replaced with global object only in non strict mode

/////////////////////////////////////////////////////////////////this inside object's method

// const obj = {
//   a: "10",
//   x: function () {
//     console.log(this);
//   },
// };

// obj.x(); // then value becomes refence object in strict mode also. for ex. object "obj" in this case

///////////////////////////////////////////////////////////////// call, apply , bind (sharing methods)

// const student1 = {
//   name: "vivek",
//   printName: function () {
//     console.log(this.name);
//   },
// };

// // student1.printName();

// const student2 = {
//   name: "kaala",
// };

// student1.printName.call(student2);

/////////////////////////////////////////////////////////////////this inside arrow function

// const obj = {
//   a: 10,
//   x: () => {
//     console.log(this); //this refers to lexical context where its lexically enclosed here its lexical context in global object
//   },
// };

// obj.x();

// const obj2 = {
//   a: 20,
//   x: function () {
//     const y = () => {
//       console.log(this); //this refers to lexical context  where its lexically enclosed here its lexical context in global object
//     }; // `this` refers to `obj2` because it inherits from the enclosing context
//     y();
//   },
// };

// obj2.x();

///////////////////////////////////////////////////////////////// this inside DOM

// this refers to particular html dom element
