/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    // Initialize your singleton instance here
  }
}

// ES5 implementation
function SingletonES5() {
  if (SingletonES5.instance) {
    return SingletonES5.instance;
  }
  SingletonES5.instance = this;
  // Initialize your singleton instance here
}

// Usage
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // Output: true

const instance3 = new SingletonES5();
const instance4 = new SingletonES5();
console.log(instance3 === instance4); // Output: true
