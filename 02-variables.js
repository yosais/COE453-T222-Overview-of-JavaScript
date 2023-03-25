// There are 4 ways to declare variables in JavaScript
// 1. Using var

var a = 1;
console.log(a);

// 2. Using let

let b = 2;
console.log(b);

// 3. Using const
// Value of a constant cannot be changed after initialization.

const c = 3;
console.log(c);

// 4. Use no keyword
// Not recommended as the variable will be GLOBAL. Instead, use one of the above // methods.

d = 4;
console.log(d);

// What is the difference between var and let?
// var and let differ in scope.
// ==> Scope of a var is function scope in which variable is declared
// ==> Scope of let is block scope in which variable is declared

function scope() {
  var a = 5; // a in the function scope
  if (a < 6) {
    let b = 6;
    console.log(a);
    console.log(b);
  }
  console.log(b); // b in the global scope (see line 9)
}
scope();
console.log(a); // a in the global scope
