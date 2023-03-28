// Array
// All elements are of the same type
let zipcodes = ['03255', '02134', '08002'];
console.log(zipcodes[0]);

let coordinates = [
  [1, 2],
  [3, 4],
];
console.log(coordinates[0]); // Get first row
console.log(coordinates[0][0]); // Get first element in first row

// Tuple
// An array of fixed size that can have different types of elements
let profile = ['User', 39, true, 15.44];

// Set
const mySet1 = new Set();
mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }

mySet1.has(1); // true
mySet1.has(3); // false

mySet1.size; // 3

mySet1.delete(5); // removes 5 from the set


// Date
const today = new Date();
console.log(today.toString());


// Object (key-value pairs)
let car1 = { make: 'Toyota', model: 'Camry', year: 2020 };
console.log(car1.make);
