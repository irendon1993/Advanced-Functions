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
// // checkIn(flight, isaac);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best!!', upperFirstWord);
// transformer('JavaScript is the best!!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('high5');
// };
// document.body.addEventListener('click', high5);

// ['Isaac', 'Marth', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Isaac');
// greeterHey('Steven');

// greet('Hello')('Isaac');

// Challenge

const greetArr = greeting => name => console.log(`${greeting}${name}`);

greetArr('Hello ')('Isaac');
