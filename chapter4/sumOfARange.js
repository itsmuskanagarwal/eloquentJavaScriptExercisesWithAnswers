function range(start=0,end=0){
    let arr =[];
    if(end < start) return [];

    for(i=start; i<=end; i++){
        arr.push(i);
    }
    return arr;
}

function sum(arr=[]){
    if(arr.length <= 0) return 0;
    let sum = 0;
    arr.forEach((e)=>{
        sum+=e;
    })
    return sum;
}

newArray = range(10,15); // Array elements: [ 10, 11, 12, 13, 14, 15 ]
totalOfArray = sum(newArray); // Total of elements: 75

console.log("Array elements:",newArray)
console.log("Total of elements:",totalOfArray)

console.log("create an array without end element: ", range(5)) // []
console.log("create an array without end element: ", range(0,0)) // [ 0 ]