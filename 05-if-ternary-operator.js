let x = 10,
  y = 20;
if (x < y) {
  console.log('x is less than y');
} else if (x == y) {
  console.log('x is equal to y');
} else {
  console.log('x is greater than y');
}

console.log(3 != 5);

// Logical operators
console.log(7 > 5 && 2 > 1);
console.log(7 > 5 || 0 > 1);
console.log(!(7 > 5));

// Conditional (Ternary) Operator
let isMember = true;
let fee = isMember ? '$2.00' : '$10.00';
console.log(fee);
