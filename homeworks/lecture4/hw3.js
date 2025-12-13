/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */
// ES5 closure 
function Singleton(){
    if(Singleton.instance){
        return Singleton.instance;
    }
    this.name = "singleton";
    this.value = Math.random();
    Singleton.instance = this;
}
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // Output: true
console.log(instance1.value === instance2.value);  

// ES6 class

class Singleton{
    constructor(){
        if(Singleton.instance){
        return Singleton.instance;
    }
    this.name = "singleton";
    this.value = Math.random();
    Singleton.instance = this;
    }
}

const instance3 = new Singleton();
const instance4 = new Singleton();
console.log(instance3 === instance4); // Output: true
console.log(instance3.value === instance4.value);  
