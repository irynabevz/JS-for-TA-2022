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

let checkNumber = prompt("Enter a number for checking: ", "Number");
remainder = checkNumber % 2;

if (checkNumber > 0 && remainder === 0) {
    console.log ("Number is positive and even.");
} 
else {
    console.log ("Number is not positive or not even.");
}

remainder = checkNumber % 7;
if (remainder === 0) {
    console.log ("Number is multiple of 7. ");
} 
else {
    console.log ("Number is not multiple of 7. ")
}

//----------------3-------------

let array = new Array();
array[0] = 2022;
array[1] = "Sofserve";
array[2] = true;
array[3] = null;

console.log (array.length);

array[4] = prompt("Enter a 5th element: ");
alert(array[4]);

array.shift();
alert(array);

//----------------4-------------

let cities = ["Lviv", "Kyiv", "Odessa", "Ternopil"]; 

console.log(cities);
let citiesInString = cities.join('*');
console.log(citiesInString);

//----------------5-------------

let isAdult = prompt("Please enter your age! ");

if (isAdult >= 18) {
    alert("You are adult!");
} else {
    alert("You are too young! ");
}

//----------------6-------------

let a = 0;
let b = 0;
let c = 0;
let trianglePerimeter = 0;
let triangleArea = 0;

a = prompt("Please enter length for first side: ");
b = prompt("Please enter length for second side: ");
c = prompt("Please enter length for third side: ");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

if (a >= 0 && b >= 0 && c >= 0) {
    trianglePerimeter = a + b + c;
    alert("Triangle perimeter is: " + trianglePerimeter);
    
    let p = trianglePerimeter/2;
    triangleArea = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    alert("The area of this triangle is: " + triangleArea.toFixed(3));

} else alert("Incorrect data! ");

