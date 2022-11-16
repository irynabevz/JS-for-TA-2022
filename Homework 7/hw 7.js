//----------------task1----------------
/*
const newWindow = window.open("", "", "width=300, height=300");

function resizeWindow(){
    newWindow.resizeTo(500, 500);
}

function moveWindow(){
    newWindow.moveTo(200,200);
}

function closeWindow(){
    newWindow.close();
}

setTimeout(resizeWindow, 2000);

setTimeout(moveWindow, 4000);

setTimeout(closeWindow, 6000);
*/
//----------------task2----------------

function changeStyleForParagraph(element) {
    element.style.color = "orange";
    element.style.font = "20px Comic Sans MS";
}

//----------------task3----------------
/*
function changeBGToBlue() {
    document.body.style.background = "blue";
}

function changeBGToPink() {
    document.body.style.background = "pink";
}

function changeBGToBrown() {
    setTimeout(function() {
        document.body.style.background = "brown";
    }, 1000);
}

function changeBGToYellow() {
    document.body.style.background = "yellow";
}
*/
//----------------task4----------------
/*
function deleteName(element) {
    element.remove(element.selectedIndex);
}

//----------------task5----------------

function eventHandler(message) {
    let resultField = document.getElementById("liveBtnMsg");

    resultField.innerHTML += message;
}

let resultField = document.getElementById("liveBtnMsg");
let element = document.getElementById("liveBtn");

element.addEventListener("click", function(){eventHandler("I was clicked! <br>")});
element.addEventListener("mouseover", function(){eventHandler("Mouse on me! <br>")});
element.addEventListener("mouseout", function(){eventHandler("Mouse is not on me! <br>")});
*/
//----------------task6----------------

//const newWindow = window.open("", "", "width=500, height=500");

window.addEventListener("resize", displayScreenSize);

function displayScreenSize() {

    let screenHeight = document.getElementById("height");
    let screenWidth = document.getElementById("width");

    screenHeight.innerHTML = window.innerHeight;
    screenWidth.innerHTML = window.innerWidth;
}