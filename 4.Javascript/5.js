// Redeclare vs Reassign 




// var


// Redeclare

var a = 10;
var a = 20;
var a = 50;

console.log(a); // output 50 

//JS works from top to bottom


// Reassign
var a = 10;
a = 20;
a = 50;

console.log(a);





// let

// Redeclare
let b = 12;
// let b = 15;

console.log(b); // redeclare doesnt work with let


// Reassign

let c = 13;
c = 14;
c = 20

console.log(c); // reassign works




//const

//redeclare

const d = 45;
const d = 54;

console.log(d); // redeclare doesnt work with const as well

// Reassign 

const d = 50;
d = 51;

console.log(d); // reassign doesnt work with const