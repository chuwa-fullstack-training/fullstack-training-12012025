function counter() {
    let total = 0;
    return function(n){
        if(n!==undefined){
            total+=n;
            return total;
        }
        return total;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8
// closure, inner could remember outer even outer finish / private and independent and safe 