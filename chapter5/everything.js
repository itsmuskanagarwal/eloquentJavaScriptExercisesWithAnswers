// This is how to use "Every" in JS:-
let checkVoteAge = function(arr) {
    return arr.every(age => age >= 18)
}

console.log(checkVoteAge([1,18])) //false
console.log(checkVoteAge([18,100])) //true

// Create Every using Loop
function everyUsingLoop(arr=[], fn){
    for(i=0; i < arr.length; i++){
        if(!fn(arr[i])){
            return false;
        }
    }
    return true;
}

console.log(everyUsingLoop([1,18], age => age >= 18)) //false
console.log(everyUsingLoop([18,100], age => age >= 18)) //true

// Create Every using Some
function everyUsingSome(arr, fn){
    return !arr.some(e => !fn(e))
}

console.log(everyUsingSome([1,18], age => age >= 18)) //false
console.log(everyUsingSome([18,100], age => age >= 18)) //true