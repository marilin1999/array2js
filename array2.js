
let myString = 'Javascript+es+super+cool';


let Myarray = myString.split("+");

let arrayLength = [Myarray.length];
let lastItem = [Myarray.length-1];

let myInverseArray = Myarray.slice().reverse();

myInverseArray.push("genial");

console.log(Myarray)
console.log(arrayLength)
console.log(lastItem)
console.log(myInverseArray)
