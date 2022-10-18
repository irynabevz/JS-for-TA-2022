//-----------task 1-------------------
/*
let width  = prompt("Enter width: ");
let height = prompt("Enter height");

width = Number(width);
height = Number(height);

rectangleArea =  calcRectangleArea(width, height);

try {
    if(isNaN(rectangleArea)) throw "Values are not a numbers"; 
    if(width == "" || height == "") throw "Parameters are empty";
    if(rectangleArea === 0) throw "Incorrect value. Parameters should be greater then 0";
} catch (err) {
    console.log(err);
}

function calcRectangleArea(width, height) {
    return width * height;
}
*/

//-----------task 2-------------------
/*
function checkAge() {

    var userAge = prompt("Please enter your age: ");

        var userAgeInt = Number(userAge);

            if(userAgeInt > 14) {
                alert("Welcome!");
            } else if(userAgeInt <= 0) {
                throw new Error("You did not entered your age");
            } else if(isNaN(userAge)) {
                throw new Error("You entered not a number.");
            } else if(userAgeInt < 14) {
                throw new Error("You do not have access to the movie.");
            }  
}

try {
    checkAge();
} catch(error) {
    alert(error.message);
}*/

//-----------task 3-------------------
/*
 class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = "MonthException";
    }
  }

  function showMonthName(monthNumber) {
    var month = ["January","February","March","April","May",
    "June","July","August","September","October","November","December"];
    alert(month[monthNumber - 1]);
}

try {
    var monthNumber = prompt("Enter month number: ");
    monthNumber = Number(monthNumber);
    if(monthNumber > 12 || monthNumber <= 0) throw new MonthException("Incorrect month number!");
    if(isNaN(monthNumber)) throw new MonthException("You entered not a number!")
    showMonthName(monthNumber);
    
} catch (error) {
    alert(error);
}
*/

//-----------task 4-------------------

function showUser(showId) {
    if (showId > 0) {
    let userID = {id: showId};

    return userID;
    } else console.log('ID must be greater then 0: ' + showId);

}

function showUsers(IDs) {

    let correctIDs = new Array;
    
    correctIDs = IDs.filter(showUser);

    console.log(correctIDs);

}

try {
    showUsers([-6,-7,8,0,2]);
} catch (error) {
    console.error(error);
}
