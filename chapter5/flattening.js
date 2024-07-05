function flattenArray(arr=[]){
    return arr.reduce((a,b) => a.concat(b))
}

console.log(flattenArray([[1,2,3],[4,5,6],[7,8,9]]))