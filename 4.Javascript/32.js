// In javaScript, break, continue, and switch are control flow statements that help control the execution of loops and conditional statements.In

// braek Statement
/*
The break statement is used to terminate the looop or switch statement.
When break is encountered, the loop or switchends immediately,
and control is passed to the next ststement after the loop or switch.\


// syntax 
 break;

 the break statement is used to terminate the loop immediately when it's executed

*/

// example

let tabelName = 89;
let startFrom = 0;
let endTill = 10;

// for (startFrom; startFrom <= endTill; startFrom++) {
//     console.log(`${tabelName} x ${startFrom} = ${tabelName * startFrom}`);

//     if (startFrom == 6){
//         break;
//     }
// }

while (startFrom <= endTill) {
  console.log(`${tabelName} x ${startFrom} = ${tabelName * startFrom}`);
  startFrom++;

  if (startFrom == 3) {
    break;
  }
}

let i = 1;
for (i; i <= 4; i++); // ; = end of code
{
  console.log(i);
}

// Continue

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("skipping 2");
    continue; // skip the current iteration when i equals 2
  }
  console.log("Value of i", i);
}

// switch statement

/*
The switch statement evaluates an expression and matches it with one of multiple cases.
Each case represents a potential match, and the associated code block runs if the expression matches.
If no cases match, an optional default block runs.


//Syntax
*/

let fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("You selected an apple.");
    break;
  case "banana":
    console.log("You selected a banana");
    break;
  case "orange":
    console.log("You selected an orange");
    break;
  case "Mango":
    console.log("You selected a mango");
    break;
  default:
    console.log("Unknown fruit selection.");
}






let rate = 4;
switch (rate) {
  case 1:
    console.log("Very Poor");
    break;
  case 2:
    console.log("Poor");
    break;
  case 3:
    console.log("Average");
    break;
  case 4:
    console.log("Good");
    break;
    case 5:
      console.log("Excellent");
  default:
    console.log("invalid ratings");
}




let dayNum = 5;
switch (dayNum) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Teusday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day of a week");
}