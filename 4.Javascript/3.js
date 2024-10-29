
// What is Variable?

/*
    VAriable is a  container for storing dta values.
    Variable can be used to store dta values.
    Variable is a name given to a memory location.
    We can us ethe information stored in a variable to perform a task.
    We can use the same variable name to refer to a differenr values.
    We can change the data of information later.
*/

// Declaring variable s using var

var firstName = "Suhail Roushan";

console.log(firstName);

// JS is case sensitive
// hello is not equal to Hello

firstName = "JavaScript";
console.log(firstName);


// By default if you didn't declare var it will take global variable as var

var Home = 'Room';
Home = 'ROOM';

// BOth are same

console.log(Home);

// By default it takes variable as global variable as var

// Ruling for naming variables
// 1. Variable Names can only contain letters, numbers, and underscores. 
// 2. Variable anmes are case sensitive

var hello = "Hi";

var Hello = "Bye";

console.log(hello, Hello);

// 3. Variable names should not be JavaScript keywords.
// Keywords are var, let, const  (Cnnot use for declaring variables)

var var = "hello";
var let =     'hi';
var const = "bye":


console.log(var);
console.log(let);
console.log(const);


var a = "Apple";
console.log(a);

var _a = "Air";
console.log(_a);

var $a = "Aeroplane";
console.log($a);

var 7a = "Hello";
console.log(7a);

// 4. Variable names should not start with a number. 
// 5.Use meaningful names in variables
// 6.Use camelCase for naming variables

// camelCase
// snale_case
// PascalCase

// ctrl + / (shortcut to comment out )

// You can use _ in variable names in start or in middle 
// You can use $ in variable names in start or in middle

// All are Valid
var _suhail = "Hello world!";
var suh_ail = "Hello wolrd!";
var $suhail = "hello world";
var suh$ail = "Hello world";
var suhail = "Hello worlds";

// spaces are not valid in variable names 
var su hail = " Hello world";

console.log(su hail);
//not allowed

// Always use camelCase
// Example: 




var final = "123";
console.log(final);

// const final = 123;
// console.log(final);  // doesnt work as key word is used

let student1 = "Abdullah";
let student2 = "Zeshan";
// let 3student = "Meraj"; // doesnt work as it starts with a number

console.log(student1, student2);

const age = 10;
const number = 9618211626;
const height = 5.7;

console.log();