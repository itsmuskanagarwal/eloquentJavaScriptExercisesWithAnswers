function customLoop(value, conditionFn,updateFn, bodyFn){
    let currentValue = value;
    while(conditionFn(currentValue)){ // checks if currentValue <= 5
        bodyFn(currentValue);
        currentValue = updateFn(currentValue); // currentValue++
    }
}

const initalization = 0;
const condition = n => n <= 5;
const increment = n => n + 1;
const body = n => console.log(n);

customLoop(initalization, condition, increment, body)