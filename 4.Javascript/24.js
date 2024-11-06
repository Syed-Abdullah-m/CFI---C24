//Type conversions

/*
The process of converting dat aof one type to another type

example : String to Number
*/

/*
There are two types of conversions in JS

1. Implicit Conversion
2. Explicit Conversion


*/

/*

Implicit Conversions happen automatically when 
JavaScript tries to perform an operation
 between different types, convverting values to a common type.


Explicit conversioons require functions or methods to manually convert types.
 commn functions are String(), Number(), and Boolean()





List of DataTypes

1. String ===> number, boolean, null, undefined
2. Number ===> string, boolean, ull, undefined
3. Boolean ===> string, number, null, undefined
4. Null ===> string, number, boolean, undefined
5. undefined ===> string, number, boolean, null


*/


//Explicit Conversions

//In Explicit Conversions
// We use built in methods

//1. Converting to numbers
// using Number()  // () == paranthesis

console.log("Converting to NUmber");

let results;
results = Number("60");
console.log(results, typeof results);

results = Number(true);
console.log(results, typeof results);

results = Number(false);
console.log(results, typeof results);

results = Number(40);
console.log(results, typeof results);

results = Number(null);
console.log(results, typeof results);

results = Number("hello");
console.log(results, typeof results);

results = Number(undefined);
console.log(results, typeof results);


//2. Converting to String
// using String()

console.log("Converting to String");

let str;
str = String("23");
console.log(str, typeof str);

str = String("abd");
console.log(str, typeof str);

str = String(45);
console.log(str, typeof str);

str = String(true);
console.log(str, typeof str);

str = String(false);
console.log(str, typeof str);

str = String(null);
console.log(str, typeof str);

str = String(undefined);
console.log(str, typeof str);


//3. Converting to boolean
// usinf Boolean()

console.log("Converting to Boolean");

let check;
check = Boolean("23");
console.log(check, typeof check);

check = Boolean(42);
console.log(check, typeof check);

check = Boolean("abc");
console.log(check, typeof check);

check = Boolean(false);
console.log(check, typeof check);

check = Boolean(null);
console.log(check, typeof check);

check = Boolean(undefined);
console.log(check, typeof check);