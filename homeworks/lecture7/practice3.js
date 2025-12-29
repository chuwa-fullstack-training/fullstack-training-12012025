// TODO: 创建一个计算器模块

// ========== calculator.js ==========
// 导出以下函数：
// - add(a, b)
// - subtract(a, b)
// - multiply(a, b)
// - divide(a, b)

// ES modules


// ========== app.js ==========
// 导入 calculator 模块
// 测试所有函数

// 你的代码...


// ES Modules - react 
// math.mjs - export 
export function add(a,b){
    return a+b;
}
export function subtract(a,b){
    return a-b;
}
export function multiply(a,b){
    return a*b;
}
export function divide(a,b){
    return a/b;
}
// app.mjs - import 
import {add, abstract, multiply, divide} from './math.mjs';


console.log(add(6,3));
console.log(subtract(6,3));
console.log(multiply(6,3));
console.log(divide(6,3));



// CommonJS - nodejs 
//  math.js - export 
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

module.exports ={
    add,
    abstract,
    multiply,
    divide
};

// app.js -import 
const math=require('./math.js');

console.log(math.add(6,3));
console.log(math.subtract(6,3));
console.log(math.multiply(6,3));
console.log(math.divide(6,3));




