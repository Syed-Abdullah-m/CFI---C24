// OBJECTS

let myAmznUser = {
  firstName: "Syed Abdullah",
  Phone: "+918008881954",
  age: 23,
  address: "Hyderabad",
  gender: "Male",
  active: true,
  cart: null,
  totalShopping: ["iPhone", "samsung"],
}; // keys           value

console.log(myAmznUser);

myAmznUser.active = false; //Update
console.log(myAmznUser);

myAmznUser.id = "AMZ00001"; //Add

console.log(myAmznUser);
