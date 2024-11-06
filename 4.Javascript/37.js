//Function with returns
/*

- Return: If you need to get a value back from the function, use return.
 This lets the function provide a specefic result that can be saved or used.
- No Return: If you just want the function to do something (like log or alert)
 and don't need a rsult, don't use return.

*/

function addNumbers(a, b) {
  let total = a + b;
  console.log(total);
}

//addNumber(4, 5);

let finalSum = addNumbers(4, 5);
console.log(finalSum);

function sum(c, d) {
  return c + d;
}

let totalSum = sum(3, 6);
console.log(totalSum);
