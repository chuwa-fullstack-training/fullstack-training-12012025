// TODO 1: 写一个泛型函数 wrapInArray
// 功能：接收任何类型的值，返回包含这个值的数组
function wrapInArray(value) {
    // 你的代码...
    return [value];
}
// 测试
var strArray = wrapInArray("hello"); // ["hello"]
var numArray = wrapInArray(123); // [123]
var boolArray = wrapInArray(true); // [true]
// TODO 2: 写一个泛型函数 getFirstAndLast
// 功能：接收数组，返回第一个和最后一个元素组成的数组
// 如果数组为空，返回空数组
function getFirstAndLast(arr) {
    // 你的代码...
    if (arr.length === 0)
        return [];
    return [arr[0], arr[arr.length - 1]];
}
// 测试
console.log(getFirstAndLast([1, 2, 3, 4, 5])); // [1, 5]
console.log(getFirstAndLast(["a", "b", "c"])); // ["a", "c"]
console.log(getFirstAndLast([])); // []
// TODO 3: 写一个泛型函数 swap
// 功能：接收两个值，返回交换后的数组
function swap(a, b) {
    // 你的代码...
    return [b, a];
}
// 测试
console.log(swap("hello", 123)); // [123, "hello"]
console.log(swap(true, "world")); // ["world", true]
