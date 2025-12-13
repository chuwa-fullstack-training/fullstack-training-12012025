// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
f()
// 7, a be modified to 7


// 2. When executed, what value will be output?
function f1() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
f1();

// 5, var is function scope 

// 3. When executed, what value will be output?
function f2() {
  a = 3;
}
f2();
console.log(a);
// 3 no var/const/let, it's global 

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();
// 6, first one modify a, second print a 

// 5.
var a = 5;
function f3() {
  var a = 7;
  console.log(a);
}
f3();
// 7, part a not influence all a 

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// 1, hoisting 