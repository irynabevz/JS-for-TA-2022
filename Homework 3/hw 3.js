//---------------task 1-------------

var numbers = [2,3,4,5];
var product = 1;
/*
for (var i = 0; i < numbers.length; i+=1) {
    product *= numbers[i];
}*/

var i = 0;

while (i < numbers.length) {
    product *= numbers[i];
    i += 1;
}

console.log(product);

//---------------task 2-------------

for (var i = 0; i <= 15; i += 1) {
    if ((i % 2) === 0) {
        console.log("%d is even ", i);
    } else 
    console.log ("%d is odd", i);
}

//---------------task 3-------------

function randArr(arraySize) {
    const numberArr = [];

    for (var i = 0; i < arraySize; i += 1) {
        var randNumber = Math.floor(Math.random() * 500) + 1;
        numberArr[i] = randNumber;
    }

    return numberArr;
}

console.log(randArr(10));


//---------------task 4-------------

var a = prompt ("Enter the number: ");
var b = prompt ("Enter the degree: ");

alert (raiseToDegree(a, b));

function raiseToDegree(a,b) {
    return a ** b;
}

//---------------task 5-------------

//findMin(1,0,5,-6,2);
console.log(findMin(1,0,5,-6,2));

function findMin() {
    var min = arguments[0];
    for (var i = 0; i <= arguments.length; i += 1) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

//---------------task 6-------------

const uniqueArr = [1,2,3,4,5];
const notUniqueArr = [1,3,5,1,2,1];

console.log(isUnique(uniqueArr));
console.log(isUnique(notUniqueArr));

function isUnique(arr) {
    var unique = true;

    for (var i = 0; i <= arr.length; i += 1) {
        for (var j = i; j < arr.length; j += 1) {
            if (arr[i] === arr[j + 1]) {
                unique = false;
                break;
            }
        }
    }

    return unique;
}

//---------------task 7-------------

const myArr = [2,1,0,5,8,3]
console.log (printLastElements(myArr, 4));

function printLastElements(arr, numberOfElements) {
    var firstMyArrElement = arr.length - numberOfElements;
    const myArr = arr.slice(firstMyArrElement);

    return myArr;
}

//---------------task 8-------------

function firstLatterToUpperCase(myString) {
    const stringInWords = myString.split(" ");
    for(var i = 0; i < stringInWords.length; i += 1) {
        stringInWords[i] = stringInWords[i][0].toUpperCase() + stringInWords[i].substr(1);
    }
    return myString = stringInWords.join(" ");
}

console.log(firstLatterToUpperCase("this is my homework"));