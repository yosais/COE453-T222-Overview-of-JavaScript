//for loop
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

//for-of loop
//Return elements of the array
let arr1 = [10, 20, 30, 40];
for (let val of arr1) {
  console.log(val); //output: 10, 20, 30, 40
}

//for-in loop
//Return indexes of elements in the array
let arr2 = [10, 20, 30, 40];
for (var index in arr2) {
  console.log(index); //output: 0, 1, 2, 3
}

//while loop
let i = 2;
while (i < 4) {
  //loop condition
  console.log(i);
  i++; //loop index
}

let x = 1,
  y = -1;
while (x <= 3 && y >= -3) {
  console.log(`${x} ${y}`);
  x = x + 1;
  y = y - 1;
}
