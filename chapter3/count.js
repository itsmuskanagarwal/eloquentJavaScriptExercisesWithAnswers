function countBs(string){
    const len = string.length;
    let count = 0;
    for(i=0; i<len; i++){
        if(string[i]==='B'){
            count++;
        }
    }
    return count
}

function countChar(string, char){
    const len = string.length;
    let count = 0;
    for(i=0; i<len; i++){
        if(string[i]===char){ // '===' checks for the upper/lower case as well.
            count++;
        }
    }
    return count
}

//Testing countBs
console.log(countBs('abababababaBB')) //2
console.log(countBs('Muskan')) //0

//Testing countChar
console.log(countChar('abababababaBB', 'a')) //6
console.log(countChar('Muskan', 'M')) //1
console.log(countChar('Muskan', 'm')) //0