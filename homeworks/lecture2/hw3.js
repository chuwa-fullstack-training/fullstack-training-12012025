// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// both 0.1 and 0.2 here are number, and JS uses floating-point math, so some decimals can't be represented exactly
// When added, some small precision errors happen, resulting in a number slightly greater than 0.3

console.log(0.1 + 0.2 == 0.3);
// false
// becasue of the floating-point math, 0.1+0.2 we get 0.30000000000000004 should be slightly greater than 0.3, not exactly 0.3.

console.log(1 +  "2" + "2");
// "122"
// "2" here are not a number but a string, so we concatenate instead of doing the calculation.

console.log(1 +  +"2" + "2");
// "32"
// +"2" converted string "2" into number 2, so 1 + 2 = 3 and then concatenate to string "2", so return "32"

console.log(1 +  -"1" + "2");
// "02"
// -"1" converts "1" into number -1, 1-1=0, concatenate to string "2", return "02".

console.log(+"1" +  "1" + "2");
// "112"
// +"1" converts "1" into 1, concatenate to string "1" and "2", return "112"

console.log( "A" - "B" + "2");
// "NaN2"
// both "A" and "B" are not a number, we cannot subtract string, return NaN.
// NaN is a string, concatenate to string "2", return "NaN2"

console.log( "A" - "B" + 2);
// NaN
// Then same reason as above, return NaN when doing "A" - "B"
// NaN + 2 = NaN

console.log("0 || 1 = "+(0 || 1));
// "0 || 1 = 1"
// 0 is false, 1 is true, 0 || 1 return first true which is 1
// concatenate string return "0 || 1 = 1"

console.log("1 || 2 = "+(1 || 2));
// "1 || 2 = 1"
// 1 and 2 are both true, so 1 || 2 returns 1
// concatenate string resturns "1 || 2 = 1"

console.log("0 && 1 = "+(0 && 1));
// "0 && 1 = 0"
// && resturns first false value, 0 is false, so return 0,
// concatenate strings resturn "0 && 1 = 0"

console.log("1 && 2 = "+(1 && 2));
// "1 && 2 = 2"
// if both true, return the last true value, so return 2

console.log(false == '0')
// true
// == does not compare the data type, false = 0, 0 == "0"

console.log(false === '0')
// false
// === compares both data value and data type, 0 != "0"
