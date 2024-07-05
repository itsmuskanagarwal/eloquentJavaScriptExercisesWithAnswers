// Create list of Scripts
const SCRIPTS = [
    {name:"Latin", ranges:[[65,90],[97,122]], direction: 'ltr'},
    {name:"Latin", ranges:[[1536,1791]], direction: 'rtl'},
    {name:"Latin", ranges:[[11904,12031],[12032,12245]], direction: 'ttb'},
]

function findScript(charCode){ 
    for(let script of SCRIPTS){
        if(script.ranges.some(([from, to]) => charCode >= from && charCode <= to))
            return script;
    }
    return null;
}

//counts occurences of each direction in the text
function countBy(items, group){
    console.log("In countBy ", "Items = ", items, " group = ", group) // Group is a function, Item is the string 'Hello'
    let counts = [];
    for(let item of items){
        let name = group(item);
        let known = counts.findIndex(e => e.name == name);
        if(known == -1){
            counts.push({name, count:1})
        }else{
            counts[known].count++;
        }
    }
    return counts;
}

function findDirection(string){
    let scripts = countBy(string, char => { // 'char' is a function that goes in 'Group'
        let script = findScript(char.codePointAt(0));
        return script ? script.direction : 'none';
    }).filter(({name})=> name != 'none'); // Filter where no script found

    if(scripts.length === 0) return 'No Dominant Direction';

    console.log("Final Result: ", scripts)
    return scripts.reduce((a,b) => a.count > b.count ? a : b)
}

console.log("Find Direction: ", findDirection('Hello'))
console.log("Find Direction: ", findDirection('مرحبًا'))
console.log("Find Direction: ", findDirection('你好'))