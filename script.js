//JavaScript from zero to Mastery
/*LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console
*/
let country, continent, population;
country = "India";
continent = "Asia";
population = "1.3 Billion";
console.log(country, " ", continent, " ", population);

// string template literals
const year = 20;
const Myname = `Abinash Anand`;
const description = `Hi i am a javascript web developer. Conding is fun!`;
console.log(`${year}, ${Myname}, ${description}`);

//challege 2 calculating BMI
const personOneName = "Mark";
const personTwoName = "John";
const personOneWeight = 70;
const personOneHeight = 1.7;
const personTwoWeight = 80;
const personTwoHeight = 1.8;
let BmiPersonOne = personOneWeight / (personOneHeight, 2);
let BmiPersonTwo = personTwoWeight / (personTwoHeight, 2);
if (BmiPersonOne > BmiPersonTwo) {
  console.log(
    `Bmi of, ${personOneName}, which is, ${BmiPersonOne}, is greater than Bmi of ${personTwoName}, which is ${BmiPersonTwo} `
  );
} else {
  console.log(
    `Bmi of, ${personTwoName}, which is ${BmiPersonTwo}, is greater than Bmi of ${personOneName}, which is ${BmiPersonOne} `
  );
}

//Type Conversion and Coercion----------------------------------------------------
console.log(String(10));
console.log(Number("Abinash"));
console.log(Number("5"));
console.log(10 + "15"); // + operator converts a number to a string and then adds the string
console.log("10" - 5); // - operator converts a string to a number and then adds the number

//5 falsy values--> 0, null, '', NuN, Undefined-----------------------------------------
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean());

let height;
if (height) {
  console.log("Height is defined!");
} else {
  console.log("Height is undefined!");
}
let lenght = 0;
if (height) {
  console.log("length is defined!");
} else {
  console.log("length is undefined!");
}
//prompt() function
let age = prompt("Hello there! What is your age?");
if (age === 18) console.log("You are an adult now!");
else if (age === 15) console.log("You are still a child!");
else console.log("You are a child!  ");

if (age !== 25) console.log("Not an elderly figure!");
//Coding challege #3
//Problem statement--> We have given two teams 1.Dolphins 2.Koalas. And the scores of 3 matches are given and we have to calculate the avg of the 3 matches and  compare the numerical values  and whichever team has the highest avg score "Wins". Given data:-   Test data: Dolphins:- {96, 108, 89 }, Koalas:- {88, 91,110} Test data 1 Bonus:- Dolphins:{97 , 112, 101}, Koalas:-{109, 95,123} Test data 2 Bonus:- Dolphins:-{97,112,101}, Koalas:-{109, 95, 106}

const dolphinsMatchScore = 96 + 108 + 89;
const koalasMatchScore = 88 + 91 + 110;
const dolphinsMatchAvgScore = (96 + 108 + 89) / 3;
const koalasMatchAvgScore = (88 + 91 + 110) / 3;
const dolphinsBonus_1_AvgScore = 97 + 112 + 101 / 3;
const koalasBonus_1_AvgScore = 109 + 95 + 123 / 3;
const dolphinsBonus_2_AvgScore = 97 + 112 + 101 / 3;
const koalasBonus_2_AvgScore = 109 + 95 + 106 / 3;
const dolphinsBonus_1_Score = 97 + 112 + 101;
const koalasBonus_1_Score = 109 + 95 + 123;
const dolphinsBonus_2_Score = 97 + 112 + 101;
const koalasBonus_2_Score = 109 + 95 + 106;

const minScore = Number(100);
console.log("Start of the game");
//CHECKING MINIMUN SCORE ==100
if (dolphinsMatchScore >= minScore && koalasMatchScore >= minScore) {
  console.log("Both teams satisfy minimum scores!");
  //CONDITION 1- DOLPHINS WINS THE GAME
  if (dolphinsMatchAvgScore > koalasMatchAvgScore) {
    console.log(
      `Dolphins wins the game with an average score of ${dolphinsMatchAvgScore}`
    );
    //CONDITION 2- FOR DRAW BETWEEN THE TEAMS
  } else if (dolphinsMatchAvgScore === koalasMatchAvgScore) {
    console.log(
      `There is a Draw between Both the teams with scores ${dolphinsMatchAvgScore} = ${koalasMatchAvgScore}`
    );
    //CONDITION 3- KOALAS WINS THE GAME
  } else {
    console.log(`Koalas wins the game with a score of ${koalasMatchAvgScore}`);
  }
}
//BONUS 1
console.log("Bonus 1 situation");
if (dolphinsBonus_1_Score >= minScore && koalasBonus_1_Score >= minScore) {
  console.log("Both the teams satisfy the minimum score!");
  if (dolphinsBonus_1_AvgScore > koalasBonus_1_AvgScore) {
    console.log("Dolphins wins the game!");
  } else if (dolphinsBonus_1_AvgScore < koalasBonus_1_AvgScore) {
    console.log("Koalas wins the game!");
  } else {
    console.log("Its a Draw!");
  }
}
//BONUS 2
console.log("Bonus 2 situation");
if (dolphinsBonus_2_Score >= minScore && koalasBonus_2_Score >= minScore) {
  console.log("Both teams satisfy minimum score!");
  if (dolphinsBonus_2_AvgScore > koalasBonus_2_AvgScore) {
    console.log("Dolphins wins the game!");
  } else if (dolphinsBonus_2_AvgScore < koalasBonus_2_AvgScore) {
    console.log("Koalas wins the game!");
  } else if (dolphinsBonus_2_AvgScore === koalasBonus_2_AvgScore) {
    console.log("Its a Draw!");
  } else {
    console.log("No one wins");
  }
}

//SWITCH STATEMENTS VS IF ELSE
//Statements vs expressions
//ternary operator
//CODING CHALLEGE #4
//CREATING A TIP CALCULATOR
const billOne = 275;
const billTwo = 40;
const billThree = 430;
let tip;
//consition 1 if bill is between 50 to 300 tip= 15%
billOne >= 50 && billOne <= 300
  ? (tip = (billOne / 100) * 15)
  : "No tip for you";
console.log(
  `The bill is ${billOne}, and the tip is ${tip}, and the final amount is ${
    billOne + tip
  }`
);
//CONDITION 2 WHEN THE BILL IS LESS THAN 5O
billTwo >= 50 && billTwo <= 300
  ? (tip = (billTwo / 100) * 15)
  : console.log("No tip for you");
//condition 2 when the bill is above 300 then tip = 20%
(billThree >= 50 && billThree <= 300) || billThree > 300
  ? (tip = (billThree / 100) * 15)
  : console.log("No tip for you");
console.log(
  `The bill is ${billThree}, and the tip is ${tip}, and the final amount is ${
    billThree + tip
  }`
);
