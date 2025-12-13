// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
 function timesTwo(nums){
    const doubled = nums.map(n=>n*2);
    return doubled;
 }
// 2. Given an array of numbers, return an array of numbers that are even.
function evenfilter(nums){
    const even = nums.filter(n=>n%2===0);
    return even;
}
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverse(nums){
    const reverseS = nums.split('').reduce((acc, num)=> {
        return num+acc;
    },'');
    return reverseS;
}
console.log(reverse("Hello World"));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

// it's desctucturing? 
function getSingle(arr){
    const single = arr.reduce((acc, item)=>{
        return acc.concat(Array.isArray(item)?getSingle(item): item)
    }, [])
  return single;
}
console.log(getSingle([[0, 1], [2, 3], [4, [5, 6]]]));