//Arrow
const sum = (a,b) => {
    return a+b;
}

console.log(sum(1,2));

//Map

let input = [1,2,3,4,5,6,7];
console.log(input);
console.log(input.map(i => {return i*2}));

//Filter
let input2 = [1,2,3,4,5,6,7,8];
console.log(input2);
console.log(input2.filter(
    i => {
        if(i % 2 == 0){
            return true;
        }
    }
));