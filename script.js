'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //   ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
// //   };
// //   console.log(booking);
// //   bookings.push(booking);
// // };

// // createBooking('LH123');
// // createBooking('LH123', 2, 800);
// // createBooking('LH123', 2);
// // createBooking('LH123', 5);
// // createBooking('LH123', undefined, 1000);

// // const flight = 'LH234';
// // const isaac = {
// //   name: 'Isaac Rendon',
// //   passport: 24739479284,
// // };

// // const checkIn = function (flightNum, passenger) {
// //   flightNum = 'LH999';
// //   passenger.name = 'Mr. ' + passenger.name;
// //   if (passenger.passport === 24739479284) {
// //     alert('Checked in');
// //   } else {
// //     alert('Wrong passport!');
// //   }
// // };

// // // checkIn(flight, isaac);
// // // console.log(flight);
// // // console.log(isaac);

// // // // Is the same as doing...
// // // const flightNum = flight;
// // // const passenger = isaac;

// // const newPassport = function (person) {
// //   person.passport = Math.trunc(Math.random()) * 100000000;
// // };

// // newPassport(isaac);
// // // checkIn(flight, isaac);

// // const oneWord = function (str) {
// //   return str.replace(/ /g, '').toLowerCase();
// // };

// // const upperFirstWord = function (str) {
// //   const [first, ...others] = str.split(' ');
// //   return [first.toUpperCase(), ...others].join(' ');
// // };

// // // Higher-order function
// // const transformer = function (str, fn) {
// //   console.log(`Original string: ${str}`);
// //   console.log(`Transformed string: ${fn(str)}`);

// //   console.log(`Transformed by: ${fn.name}`);
// // };
// // transformer('JavaScript is the best!!', upperFirstWord);
// // transformer('JavaScript is the best!!', oneWord);

// // // JS uses callbacks all the time
// // const high5 = function () {
// //   console.log('high5');
// // };
// // document.body.addEventListener('click', high5);

// // ['Isaac', 'Marth', 'Adam'].forEach(high5);

// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// // const greeterHey = greet('Hey');
// // greeterHey('Isaac');
// // greeterHey('Steven');

// // greet('Hello')('Isaac');

// // Challenge
// // const greetArr = greeting => name => console.log(`${greeting}${name}`);

// // greetArr('Hello ')('Isaac');

// const lufthansa = {
//   airline: 'Lufhansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Isaac Rendon');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does not work
// // book(23, 'Sarah Williams');

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 584, 'Joey Shakes');
// console.log(swiss);

// //Apply method
// const flightData = [582, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind Method
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Isaac Rendon');
// bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// // Binding this to a button
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// // const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// const addVAT = function (value) {
//   return function (rate) {
//     console.log(value + value * rate);
//   };
// };

// console.log(addVAT(100)(0.23));
// console.log(addVAT(50)(0.23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

///////////////////////////////////////
// Coding Challenge #1

// /*

// HINT: Use many of the tools you learned about in this and the last section ????

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data.
//  Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object!
//  So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK ????
// */

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section ????
//   answers: new Array(4).fill(0),
// };

// // PROBLEM
// // Let's build a simple poll app!

// // A poll has a question, an array of options from which people can choose,
// // and an array with the number of replies for each option. This data is stored in the starter object below.

// // Here are your tasks:

// //   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
// //         What is your favourite programming language?
// //         0: JavaScript
// //         1: Python
// //         2: Rust
// //         3: C++
// //         (Write option number)

// poll.registerNewAnswer = function () {
//   let awnser = Number(
//     prompt(`What is your favourite programming language?
//           0: JavaScript
//           1: Python
//           2: Rust
//           3: C++
//           (Write option number)`)
//   );

//   if (awnser === 0) {
//     console.log('Nice!');
//     this.answers[0]++;
//     console.log(this.answers);
//   } else if (awnser === 1) {
//     console.log('Nice!');
//     this.answers[1]++;
//     this.displayResults();
//     console.log(this.answers);
//   } else if (awnser === 2) {
//     console.log('Nice!');
//     this.answers[2]++;
//     console.log(this.answers);
//   } else if (awnser === 3) {
//     console.log('Nice!');
//     this.answers[3]++;
//     console.log(this.answers);
//   } else {
//     console.log('WYD!');
//   }
// };

// // 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// //   1.2. Based on the input number, update the answers array.
// // For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
// // Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

// // 2. Call this method whenever the user clicks the "Answer poll" button.

// // 3. Create a method 'displayResults' which displays the poll results.
// // The method takes a string as an input (called 'type'),
// // which can be either 'string' or 'array'. If type is 'array',
// //  simply display the results array as it is, using console.log().
// //  This should be the default option.
// // If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

// // poll.displayResults = function (type = 'array') {
// //   type = prompt('Array or String?');
// //   if (type.toLocaleLowerCase() === 'array') {
// //     console.log(this.answers);
// //   } else if (type.toLowerCase() === 'string') {
// //     // let [...pollResults] = this.answers;
// //     console.log(`Poll results are ${this.awnsers.join(', ')}`);
// //   }
// // };
// // // 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// // // // poll.displayResults();

// // // const runOnce = function () {
// // //   console.log('This will never run again');
// // // };

// // // runOnce();

// // // // IIFE
// // // (function () {
// // //   console.log('This will never run again');
// // //   const isPrivate = 23;
// // // })();

// // // (() => console.log('This will never run again'))();

// // // {
// // //   const isPrivate = 23;
// // //   var isNotPrivate = 46;
// // // }

// // // // console.log(isPrivate);
// // // console.log(isNotPrivate);

// // const secureBooking = function () {
// //   let passangerCount = 0;

// //   return function () {
// //     passangerCount++;
// //     console.log(`${passangerCount} passangers`);
// //   };
// // };

// // const booker = secureBooking();

// // booker();
// // booker();
// // booker();

// // console.dir(booker);

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const pergroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 group, wach with ${pergroup} passengers.`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// // const pergroup = 1000;
// boardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge ????

Take the IIFE below and at the end of the function, 
attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. 
Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked!
 Take all the time you need. Think about WHEN exactly the callback function is executed, 
 and what that means for the variables involved in this example.

GOOD LUCK ????
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
