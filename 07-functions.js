// Named functions
function add1(x, y) {
  return x + y;
}

let x = 1,
  y = 2;
console.log(`${x} + ${y} = ${add1(x, y)}`);

// Anonymous functions
let add2 = function (x, y) {
  return x + y;
};

console.log(`${x} + ${y} = ${add2(x, y)}`);

// Arrow functions (lambda function)
let add3 = (x, y) => x + y;

console.log(`${x} + ${y} = ${add2(x, y)}`);
