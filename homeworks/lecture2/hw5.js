// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}

// answer:
var x;
var y;
if (x !== 3) {
  console.log(y);
  y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}
// undefined;5;5





// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
// answer: 
var x;
x = 3;
if (x === 3) {
  x = 2;
  console.log(x);
}
console.log(x);
// 2， 2（cuz second one also can get 2， it's on function not block）