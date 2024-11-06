// CONTROL FLOW STATEMENTS

/*
JavaScript control flow statements help you manae the sequence in which code executes.
They include conditional statements, loops, and exception handling.
Here's a comprehensive break down of each type of example.
*/

//Conditional Statements

// Condtional statements alloe you to execute code based on specefic condtions.

//If Statement

// the if statement executes a block of code if a specified condition is true.

// If else Statement

// let age = 15;

// if (age == 15) {
//     console.log("Yes, True I am 15");
// } else {
//     console.log("False ");
// }

// let check = age == 15 ? "yes" : "No"

// console.log(check);

/*
There are 3 types of statements
> if
> if else
> if else if       else

>nested if else
*/

let totalMarks = 50;

if (totalMarks >= 35) {
  console.log("bhai pass hoagye");
} else {
  console.log("bhai fail");
}

// let age = 25;

// if (age < 13) {
//     console.log("You're a child.");
// } else if (age < 19 ) {
//     console.log("You're a teenager.");
// } else if (age < 65) {
//     console.log("You're an adult.");
// } else {
//     console.log("You're a senior.");
// }

let lightColor = "yellow";

if (lightColor == "green") {
  console.log("Go!");
} else if (lightColor == "yellow") {
  console.log("slow down.");
} else if (lightColor == "red") {
  console.log("Stop");
} else {
  console.log("Invalid light color");
}

//Nested if else

let age = 18;

if (age >= 18) {
  console.log("You are an adult");
  if (age >= 21) {
    console.log("You are elegible for job");
  } else {
    console.log("You are not elegible for job");
  }
} else {
  console.log("You are a minor, not elegible.");
}

let score = 60.5;

if (score > 60) {
  console.log("You passed");
  if (score >= 90) {
    console.log("congratulations! You passed with distinctin.");
  } else {
    console.log("Good job on passing.");
  }
} else console.log("You failed the test.");
