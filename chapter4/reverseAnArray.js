function reverseArray(arr=[]){
    if(arr.length <= 0){
        return [];
    }
    let result = [];
    for (let index = arr.length-1 ; index >= 0 ; index--) {
        result.push(arr[index]);
    }
    return result;
}

console.log("Reverse Array: ",reverseArray([1,2,3])) //[ 3, 2, 1 ]

function reverseArrayInPlace(arr=[]){
    if(arr.length <= 0){
        return [];
    }
    let mid = Math.floor(arr.length/2);

    for(let i = 0; i<mid; i++){
        let element = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = element;
    }

    return arr;
}

console.log("Reverse Array In Place: ",reverseArrayInPlace([1,2,3,4,5,6,7]))

/*
Dry run for reverseArrayInPlace([1,2,3,4,5,6,7]):
Array length = 7;
mide = 3;

Round 1:
i=0;
0 < 3 True
element = arr[0] = '1';
arr[0] = arr[7 - 1 - 0] -> arr[6] -> '7';
arr[7 - 1 - 0] -> arr[6] = element -> 1

Now array is: [7,2,3,4,5,6,1]

Round 2:
i=1;
1 < 3 True
element = arr[1] = '2';
arr[2] = arr[7 - 1 - 1] -> arr[5] -> '6';
arr[7 - 1 - 1] -> arr[5] = element -> 2

Now array is: [7,6,3,4,5,2,1]
*/