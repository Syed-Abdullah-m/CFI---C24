//Functions
/*
Functions is a block of code
which performs specefic task

There are two types of functions:

1. Built-in functions 
2. user defined functions


1. Built-In Functions     // Advanced JS
- string finctions
- Array Functions
- Math Functions
- Date Functions 
- Number Functions 
- JSON Functions
- Console Functions



2. User Defined Functions

// Declaring a Function

Syntax

//keyword  Name of function
function nameOfFunction()
{
}

//calling the function 
nameofFunction()


//declaring the function
function box()
{
}

//Calling the function
box()



// Important points in functions
1.  A funcionis declared using the function keyword
2. Always use camelCase for declaring function name
3. The body of function is written in code block {}
4. Functions are reuseable
5. Functions are the fundamental blocks of javaScript
6. Function is a group of code designed to perform specefic task
7. javaScript functions can be called anywhere in your program

*/

// function sayHello() {
//     console.log("Hello Everyone");
// }

// //calling the function
// sayHello()
// sayHello()
// sayHello()

function hola() {
  console.log("HOLA!");
}

hola();

/*
// Types of user-defined functions

1. Simple Functions
2. Function Parameters
3. Function with return
4. Function Expresssion
5. Arrow Function

*/

//1. Simple Function
// a basic function that performs actions and doesn't return a value

function greet() {
  console.log("Hello World!");
}

greet(); // output :  "Hello World!"

//2. Functions with Parameter (without return)

/*

In this type of function:
- You pass parameters to the function, which are used within the functions.
-The function performs an action, but it doesn't give anything back when it's done.
-Without a return statement, the function will implicitly return undefined.

*/

function sayHello(firstName) {
  console.log("Hello " + firstName + "!"); // with quotations
  console.log(`Hello ${firstName}!`); // with template literals or backticks (``)
}

sayHello("Abdullah");

// Here firstName is a parameter, so we can pass any name when we call sayHello.

function student(studentName) {
  console.log(`${studentName} is a student of CFI.`);
}

student("Zeshan");

function sumNumbers(num1, num2) {
  console.log(num1 + num2);
}

sumNumbers(7, 8);

function productNum(num1, num2) {
  console.log(num1 * num2);
}

productNum(2, 4);

function differenceNum(num1, num2) {
  console.log(num1 - num2);
}

differenceNum(67, 48);

function quotientNum(num1, num2) {
  console.log(num1 / num2);
}

quotientNum(12, 4);

function table(num) {
  let i = 1;
  for (i; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
  console.log("----------------------");
}

table(7);
table(9);
table(12);

// create a function which creates to parameters l , b and find the area of rectangle

function areaRectangle(l, b) {
  console.log(`Area of rectangle = ${l * b}`);
}

areaRectangle(2, 4);

// Area of triangle

function areaTriangle(b, h) {
  console.log(`area of triangle = ${(1 / 2) * b * h}`);
}

areaTriangle(4, 6);

//Area of square

function areaSquare(s) {
  console.log(`Area of square = ${s ** 2}`);
}

areaSquare(5);


