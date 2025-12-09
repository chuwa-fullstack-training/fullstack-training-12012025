// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    let max = list[0]
    for (let i = 1; i <list.length; i++){
        if (list[i] > max){
            max = list[i]
        }
    }
    return max
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    for (let i = 0; i < list.length / 2; i++){
        let temp = list[i];
        list[i] = list[length - 1 - i]
        list[length -1 - i] = temp
    }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    let count = 0;
    for (let item of list){
        if (item === element){
            count++;
            if (count >= 2){
                return true;
            }
        }
    }
    return false;
}