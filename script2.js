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

//Functions calling functions
function cutFruitPieces(fruits) {
  return fruits * 4;
}
const processedJuice = function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const fruitPieces = `with ${applePieces} apple pieces and ${orangePieces} orange pieces juice is made! `;
  return fruitPieces;
};
console.log(processedJuice(2, 3));

/* fundamentals part 2
#Challenge 1
1.create an arrow function to calculate the average of 3 match scores
2.create a function which takes parameters of the averages score of two teams like avgScoreDolphins and avgScoreKoala.
3. then console output the function.
*/

//case1
(calAverage) => {
  const avgScoreDolphins = (44 + 23 + 71) / 3;
  const avgScoreKoala = (65 + 54 + 49) / 3;
};

//case2
(calAverage2) => {
  const avgScoreDolphins = (85 + 54 + 41) / 3;
  const avgScoreKoala = (23 + 34 + 27) / 3;
};
//2
const winningTeam = checkWinner(avgScoreDolphins, avgScoreKoala);
//case1 winner
