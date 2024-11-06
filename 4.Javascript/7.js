// dataTypes in JS 

// 1. Primitive Data type
// 2. NOn Primitive Data type 

/*
Primitive Data Type : It can store single type of data


Non Primitove Data type: It can store multiple types of data


Primitive Data Types

1. String ==> Textual Data ==> "Hello Hi I am Abdullah" , 'Hello I am Abdullah'
2. Number ==> Integer or Decimal ==> 4 and 24.42
3. Boolean => Any 2 values it can be true or false
4. null ==> denotes to an empty value
5. undefined => A data type 

*/

let s;

s = "Hello Hi I am Abdullah";

console.log(s);



// Non Primitive Data Type
//  It can store Multiple Type of Data Types

// 6. Objects
// 7. Arrays

/*

Objects : Objects are key value pair of collection of data 

Example :

let person = {

firstName:"Suhail"

}
 
 
 
 
 
*/

let firstName = "Syed Abdullah";  // String
let age = 22;  // Number
let isAlive = true;  // Boolean



let person = {
  firstName: "Suhail",
  age: 23,
  phone: "9618211525",
  isAlive: true,
  aadhar: 601627242225,
  text: null,
  sleep: undefined
};                  //Object



console.log(person.aadhar);
console.log(person.firstName,person.age);

/*
Arrays : It Enables Storing A collection of
Multiple Items Under a Single Variable Name 
  
*/


// Arrays

let cfiStudents = ["Ismail","Naasir","Fatima","Sneha","Samid",23,244,12,13.4,null,true,undefined]
//                   0        1        2        3        4    5   6   7  8   9     10    11
// Arrays start from 0th Index
console.log(cfiStudents[0],cfiStudents[1]);

console.log(cfiStudents[0 || 2 && 3]);



