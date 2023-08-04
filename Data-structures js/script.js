// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
//     console.log(time, address, mainIndex, starterIndex);
//   },
// };

// restaurant.orderDelivery({
//   time: '20:00',
//   address: '53 bakers street',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //Nested array destructuring
// const nested = [1, 2, [3, 4]];
// const [a, b, [c, d]] = nested;
// console.log(a, b, c, d);

//Destructuring of objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//generic variable name destructuring
// const {
//   name: resturantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(resturantName, hours, tags);

// spread operator
// const newMenu = [...restaurant.starterMenu, 'kulfi', 'iceCream'];
// console.log(`Prints the new array ${newMenu}`);
//prints individual elements
// console.log(...newMenu);
// console.log(restaurant.mainMenu);
// //copy array
// const copyArray = [...restaurant.mainMenu];
// console.log(copyArray);

//join two arrays
// const joinArray = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(joinArray);

//spread in obj
// const newObj = {
//   founded: 1998,
//   ...restaurant,
// };
// console.log(newObj);

//rest operator
// const { sat, ...otherDays } = restaurant.openingHours;

// console.log(sat, otherDays);

//function
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < add.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 10);
// add(10, 20, 25);
// add(10, 20, 30, 40, 50);

//for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
      'Messi',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
      'Ronaldo',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
console.log(players1, players2);
// const players1 = game.players[[0]];
// console.log(players1);
// const players2 = game.players[[1]];
// console.log(players2);
//goalkeeper team 1
const [gk, ...fieldPlayers] = players1;
console.log(gk);
// const gk = game.players[[0]][0];
//final players team 1
console.log(fieldPlayers);
//all players team 1 and team 2
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const substitutePlayers = ['Thiago', 'Countinho', 'Perisic'];
const players1Final = [...players1, ...substitutePlayers];
console.log(players1Final);
//retrieving values from odds obj
const { team1, x: draw, team2 } = game.odds;
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
console.log('team conditions win/draw/lose' + team1, draw, team2);
//function that takes player names and pprints on the console that these players scored
function printGoals(...scoredPlayers) {
  for (const score in scoredPlayers) {
    console.log(scoredPlayers[score]);
  }
  console.log('total goals scored by all the players: ' + scoredPlayers.length);
}
//function calling the players who scored
printGoals('abinash', 'anand', 'mahato');
printGoals(...game.scored);
//checking which team wins the lesser the odds a team have the more likely it to win the game
// checked without using if-else statement and ternary operator
console.log(
  team1 < team2
    ? `${game.team1} wins the match with the odds ${team1}`
    : team1 > team2
    ? `${game.team1} wins the match with the odds ${team1}`
    : 'it is a tie'
);
