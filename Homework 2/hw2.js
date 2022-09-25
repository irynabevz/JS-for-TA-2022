//----------------1-------------

let x = 1;
let y = 2;

let res1 = String(x) + y; 
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = true + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = (x != y)
console.log(res3); // true
console.log(typeof res3); // "boolean"

x = "Data"
let res4 = Number(x)
console.log(res4); // NaN
console.log(typeof res4); // "number"*/

//----------------2-------------

let checkNumber = prompt("Enter a number: ", "Number");
remainder = checkNumber % 2;

if (checkNumber > 0 && remainder === 0) {
    console.log ("Number is positive and even.");
}

remainder = checkNumber % 7;
if (remainder === 0) {
    console.log ("Number is multiple of 7. ");
}
