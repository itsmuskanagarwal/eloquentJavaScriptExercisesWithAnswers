function isEven(n){
    if(n<0) return false;
    if(n===0) return true;
    if(n===1) return true;
    return isEven(n-2)
}

console.log(isEven(50)) //true
console.log(isEven(0)) //true
console.log(isEven(1)) //true
console.log(isEven(-1)) //false
