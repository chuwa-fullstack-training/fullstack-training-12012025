// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// JavaScript uses binary floating-point representation (IEEE 754).
// Some decimal numbers (like 0.1 and 0.2) cannot be represented exactly in binary, so the result is slightly off.
console.log(0.1 + 0.2 == 0.3);
// false
// Due to the precision issue mentioned above, 0.1 + 0.2 results in 0.30000000000000004, which is not equal to 0.3.
console.log(1 +  "2" + "2");
// 122
// In the first operation, 1 is converted to a string and concatenated with "2", resulting in "12".
// Then "12" is concatenated with "2", resulting in "122".
console.log(1 +  +"2" + "2");
// 32
// In the first operation, +"2" converts the string "2" to the number 2.
// So, 1 + 2 equals 3.
// Then 3 is concatenated with the string "2", resulting in "32".
console.log(1 +  -"1" + "2");
// 02
// In the first operation, -"1" converts the string "1" to the number -1.
// So, 1 + (-1) equals 0.
// Then 0 is concatenated with the string "2", resulting in "02".
console.log(+"1" +  "1" + "2");
// 112
// In the first operation, +"1" converts the string "1" to the number 1.
// So, 1 + "1" results in the string "11".
// Then "11" is concatenated with the string "2", resulting in "112".
console.log( "A" - "B" + 2);
// NaN
// Subtracting two non-numeric strings results in NaN (Not a Number).
// Adding 2 to NaN still results in NaN.    
console.log( "A" - "B" + "2");
// NaN2
// Subtracting two non-numeric strings results in NaN (Not a Number).
// Concatenating NaN with the string "2" results in the string "NaN2".
console.log( "A" - "B" + 2);
// NaN
// Subtracting two non-numeric strings results in NaN (Not a Number).
// Adding 2 to NaN still results in NaN.    
console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1
// 0 is falsy, so 0 || 1 → 1.
console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1
// 1 is truthy, so 1 || 2 → 1.
console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
// 0 is falsy, so 0 && 1 → 0.
console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// 1 is truthy, so 1 && 2 → 2.
console.log(false == '0')
// true
// '0' becomes number → 0
// false becomes number → 0
// 0 == 0 → true
console.log(false === '0')
// false
// Strict equality checks both value and type.
// false is boolean, '0' is string → different types → false