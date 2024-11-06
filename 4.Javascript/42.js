//Recursions

// function test() {
//     console.log("Hello");
//     test();
// }

// test(); // Output - "Hello"  loop


/*
Recursion is a process in which a function calls itself directly
or indirectly in order to solve a problem by breaking it down into smaller, similar sub-problems.
This repeated self-calling continues until it reaches a base case,
which is a condition where no further recursion is needed,
allowing the function to start returning values back up through each call.

In simpler terms, recursion is when something is defined or done
in terms of itself until it reaches a stopping point.
*/


//Print numbers upto n


// function call(num) {
//     if (num < 4){
//         return console.log("Stop");
//     }
//     console.log(num);
//     call(num - 1);
// }
// call(5)



// function call(numb) {
//     if ( numb <= 750 ){
//         return console.log("stop");
//     }
//     console.log(numb);
//     call(numb  + 10)
// }
// call (110)




// function call(number) {
//     if ( number <= 0 ){
//         return console.log("stop");
//     }
//     console.log(number);
//     call(number - 1)
// }
// call (6)



function factorial(nm) {
    if (nm == 0 || nm == 1) {
        return  2;
    }

    return nm * factorial(nm - 1)
}

console.log(factorial(5));