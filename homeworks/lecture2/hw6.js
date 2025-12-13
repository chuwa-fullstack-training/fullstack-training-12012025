// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    let ans=list[0];
    for(let i=1; i<list.length; i++){
        if(list[i]>ans){
            ans=list[i];
        }
        continue;
    }
    return ans;
}
console.log(largestElement([1,2,3,4,5]));
console.log(largestElement([-1,12,23,25,34]));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    list.reverse();
    return list;
}

console.log(reverseList([1,2,3,4,5]));
console.log(reverseList([-1,12,23,25,34]));
// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    let count = 0;    
    for(let i=0;i<list.length;i++){
        if(list[i]===element){
            count++;
            if(count >= 2){
                return true;
            }
        }
    }

    return false;
}


console.log(checkTwice([1,2,3,4,5,5], 5));
console.log(checkTwice([-1,12,23,23,25,34], 34));
console.log(checkTwice([-1,12,23,23,25,34], 23));