/* Activating strict mode
1. strict mode helps to show the errors in the code which is usually silently hidden in javascript
2. It also helps to restict the coder to some extent thus helps to reduce bugs in the code 
*/
//syntax of "strict mode"
"use strict";
//Functions in js
function fruitJuice(apple, orange) {
  console.log(apple, orange);
  const Juice = `With ${apple} apple and ${orange} orange we make a mixed fruit juice!`;
  return Juice;
}
const mixedFruitJuice = fruitJuice(5, 4);
console.log(mixedFruitJuice);
//function declaration
function ageCalculator(personAge) {
  const personYear = 2021 - personAge;
  return personYear;
}
const year = ageCalculator(2003);
console.log(year);

//function expression
const agecal = function (personAge2) {
  const person2Year = 2021 - personAge2;
  return person2Year;
};
console.log(20);

//ARROW FUNCTION
//calculating retirement years left
const calAge3 = (birthYear) => 2021 - birthYear;
const age3 = calAge3(2003);
console.log(age3);
//multiple expressions in arrow function
const yearsBeforeRetirement = (birthYear2, userName) => {
  const age2 = 2021 - birthYear2;
  const retirementYearsLeft = 65 - age2;
  return `His name is ${userName} and his age is ${birthYear2}`;
};

console.log(yearsBeforeRetirement(2003, "Abinash Anand"));
