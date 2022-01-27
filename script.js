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
// const greetArr = greeting => name => console.log(`${greeting}${name}`);

// greetArr('Hello ')('Isaac');

const lufthansa = {
  airline: 'Lufhansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Isaac Rendon');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 584, 'Joey Shakes');
console.log(swiss);

//Apply method
const flightData = [582, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Isaac Rendon');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

// Binding this to a button
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

const addVAT = function (value) {
  return function (rate) {
    console.log(value + value * rate);
  };
};

console.log(addVAT(100)(0.23));
console.log(addVAT(50)(0.23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
