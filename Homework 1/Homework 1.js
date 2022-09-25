//----------2----------------

console.log("Hello, Bevz!");

//----------3----------------

let todayDegree = 30;
let tomorrowDegree = 20;

console.log("Forecast for today: " + todayDegree);
console.log("Forecast for tomorrow: " + tomorrowDegree);

todayDegree = tomorrowDegree;
console.log("Forecast for today: " + todayDegree);
console.log("Forecast for tomorrow: " + tomorrowDegree);

//----------4----------------

const weatherForecast = {
    temperature: 15,
    city: "Lviv",
    isItRain: false,
    windDirection: null,
    humidity: undefined 
};

//----------5----------------

let isAdult = confirm("Are you 18?");
console.log("Is this user adult: " + isAdult);

//----------6----------------

let firstName = "Iryna";
let lastName = "Bevz";
let group = "JS for TA";
let birthYear = 1995;
let maritalStatus = false;
let jsKnowledge  = null;
let homework = undefined;

console.log(typeof birthYear);
console.log(typeof maritalStatus);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof jsKnowledge);
console.log(typeof homework);

//----------7----------------

let name = prompt("Enter your login: ", "Login");
let email = prompt("Enter your email: ", "Email");
let password = prompt("Enter your password: ", "Password");

alert("Welcome " + name + "!" +
    " Your email: " + email + 
    " Your password: " + password);

//----------8----------------

function countSeconds()
{
    let timeInSeconds;
    let timeFrame = prompt("Enter a time frame: 1 hour, day, month", "Time frame");

    if (timeFrame.toLowerCase() === "1 hour") {
        timeInSeconds = 60;
        alert("In " + timeFrame + " " + timeInSeconds + " seconds. ");
    } 
    else if (timeFrame.toLowerCase() === "day") {
        timeInSeconds = 24*60;
        alert("In " + timeFrame + " " + timeInSeconds + " seconds. ");
    } 
    else if (timeFrame.toLowerCase() === "month") {
        timeInSeconds = 30*24*60;
        alert("In " + timeFrame + " " + timeInSeconds + " seconds. ");
    } 
    else alert ("You have entered incorrect value!");
}

countSeconds();