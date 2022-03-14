/* Activating strict mode
1. strict mode helps to show the errors in the code which is usually silently hidden in javascript
2. It also helps to restict the coder to some extent thus helps to reduce bugs in the code 
*/
"use strict";
//syntax of "strict mode"
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

const calcAvg = (match1Score, match2Score, match3Score) =>
  (match1Score + match2Score + match3Score) / 3;
console.log(calcAvg(10, 20, 30));

//Test1
let scoreDolphins = calcAvg(44, 23, 71);
let scoreKoalas = calcAvg(65, 59, 44);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas)
    console.log(`Dolphin Wins (${avgDolphins} vs ${avgKoalas})`);
  else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koala Wins (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);
//Test2
scoreDolphins = calcAvg(70, 50, 80);
scoreKoalas = calcAvg(20, 38, 24);
console.log(`scoreDolphins >  scoreKoalas`);
checkWinner(scoreDolphins, scoreKoalas);

//CHALLENGE 2
//TIP CALCULATOR
/*
STEVEN IS STILL BUILDING HIS TIP CALCULATOR, USING THE SAME RULES AS BEFORE: THE 15% OF THE BILL IS THE VALUE IS BETWEEN 50 AND 300, AND IF THE VALUE IS DIFFERENT, THE TIP IS 20%
1.WRITE A FUNCTION 'calcTip that makes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's array ! So create an array "bills "containing the test data below.
3.Create an array "tips" containing the tip value for each bill, calculated from the function you created before. 
4.Bonus: create an array "total " containing the total values. so the bill + tip.
Test data: 125, 555 and 44
*/
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

//challenge
//aim- to print the name and the no of friends and finally the best friend
const friends = ["micheal", "jay", "gween"];
const jonas = {
  name: "jonas",
  age: 30,
  friends: ["micheal", "jay", "gween"],
};
const bfName = prompt("Name of jonas's best friend");
console.log(
  `${jonas.name} has ${friends.length} friends, and his best friend is called ${friends[bfName]}`
);

//javascript objects
//object method

const abinash = {
  name: "Abinash",
  surname: "Anand",
  rollNo: 4,
  prn: "2014110844",
  hobby: "Wb development",
  friend: ["aayush", "ansh", "deepak", "hartej"],
  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },
};
