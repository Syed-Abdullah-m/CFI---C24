// 1. String ===> number, boolean, null, undefined


let str;
str = "abc" + "123"; //string
console.log(str, typeof str);

str = "abc" + 23; //number
console.log(str, typeof str);

str = "2" + 123; //number
console.log(str, typeof str);

str = "1" + true; //boolean
console.log(str, typeof str);