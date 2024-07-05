/*
Array = [1,2,3];
List =
{
value:1,
rest:{
     value:2,
    rest:{
        value:3,
        rest:{}
        }
    }
}
*/

function arrayToList(arr=[]){
    let obj = {};
    for(let i = arr.length - 1; i >= 0; i-- ){
        obj = { value : arr[i], key : obj};
    }
    return obj
}

console.log("Array to List => ",arrayToList([1,2,3]))

function listToArray(list = {}){
    let array = [];
    while (list) {
        if (list.key) {
            array.push(list.value);
          }
        list = list.key;
      }
    return array;
}

console.log("List to Array => ",listToArray({ value: 1, key: { value: 2, key: { value: 3, key: {} } } }))