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


// Implicit Conversions

// 1. Any DataType to String(using '+' operator)

console.log("Any dataType to String");
    
let marks = 2 + "3";
console.log(marks, typeof marks);

marks = '3' + 4;
console.log(marks, typeof marks);

marks = "3" + undefined;
console.log(marks, typeof marks);

marks = "5" + null
console.log(marks, typeof marks);

marks = "6" + true
console.log(marks, typeof marks);


// 2. Any DataType to Number (Using '-' , '/' , '*') 

console.log("Any dataType to Number");

let results;
results = "4" - 2;
results = "4" - "1";
console.log(results, typeof results);

results = "hello" - "hi";
console.log(results, typeof results);

results = "45" - "hola";
console.log(results, typeof results);

results = "5" * 3;
console.log(results, typeof results);

results = "32" / 2;``
console.log(results, typeof results);

results = "4" - true;    // in dataTypes true is 1
console.log(results, typeof results);

results = "7" - false;   // in dataTypes false is 0
console.log(results, typeof results);


// 3. Any dataType to Boolean

console.log("Any dataType to Boolean");

let check;

check = "5" + true;
console.log(check, typeof check);

check = "20" - true;
console.log(check, typeof check);

check = "4" - false;
console.log(check, typeof check);

check = 4 - true;
console.log(check, typeof check);

//4. Null to Number
//null = 0

console.log("Null to number");

let test;
test = 4 - null;
console.log(test, typeof test);

test = 4 + null;
console.log(test, typeof test);


//5. Any dataType to undefined

console.log("Any DataType to undefined");

let final;

final = undefined + "test";
console.log(final, typeof final);

final = undefined - "test";
console.log(final, typeof final);

final = undefined + 3;
console.log(final, typeof final);

final = undefined + null;
console.log(final, typeof final);






