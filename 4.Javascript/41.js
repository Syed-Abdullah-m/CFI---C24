// test();
// let test = () => {
//   console.log("hello");
// };

// Anonymous Function

/*
An anonymous function in JavaScript is a function that does not have a name.
It's often used when you need a function as a value,
particularly in case where you don't need to reference the function later

Anonymous functions are useful for single-use functions or for functions passed as arguments.

*/

//Anonymous Function

let sayHello = function () {
  console.log("Hello");
};
sayHello();

//IIFE (Immediately Invoked Function Expression)

(function () {
  console.log("Hello");
})();



// fuction expression comes under Anonymous functions   