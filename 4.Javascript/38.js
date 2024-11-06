
//Without Return

function addWithLog(a, b) {
    console.log(a + b);  //this just prints the result to the console
}

addWithLog( 3, 4); // Output: 7

//Trying to use the result in another variable

let doubleResult = addWithLog(3,4) * 2; // This will not work as expected
console.log(`Doubled Result ( with console.log only): ${doubleResult}`);  //output: NaN





// With Return


function addWithReturn(a, b) {
    return a + b;  //this returns the result so we can us eit later
}

let result = addWithReturn(3, 4); // stores the result of 3 + 4, which is 7
console.log(`First result: ${result}`);  // Output: First Result: 7


//NOw we can use this result in further calculations

let resultDouble = result * 2; // This will not work as expected
console.log(`Doubled Result (with return): ${resultDouble}`);  //output: Doubled Result (with return): 14











function sumNumbers(num1, num2) {
    let total = num1 + num2;
    return total;
    console.log(total);
}

sumNumbers(4,7); //11

let storeFunction = sumNumbers(4,7);
console.log(storeFunction);