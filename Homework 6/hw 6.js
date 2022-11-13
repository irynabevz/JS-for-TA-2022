//-----------------task 1-----------------

//document.getElementById("test").innerHTML = "Second";

document.querySelector("#test").innerHTML = "Second"

//-----------------task 2-----------------
/*
let imageTag = document.getElementsByTagName("img");

imageTag.src = "cat.jpg";

alert(imageTag.src);
*/

//-----------------task 3-----------------

/*let pArray = document.querySelectorAll("div p");


for(let i = 0; i < pArray.length; i += 1){
    console.log("Selector text " + i + ": " + pArray[i].textContent);
}

//console.log(pArray);
*/

//-----------------task 4-----------------
/*
console.log(
    document.getElementById("list").firstChild.innerHTML, 
    document.getElementById("list").lastChild.innerHTML,
    document.getElementById("list").firstChild.nextSibling.innerHTML,
    document.getElementById("list").lastChild.previousSibling.innerHTML,
    document.getElementById("list").childNodes[2].innerHTML
);

console.log("*********************");

let listArr = document.getElementById("list").childNodes;

console.log(
    listArr[0].innerHTML,
    listArr[4].innerHTML,
    listArr[1].innerHTML,
    listArr[3].innerHTML,
    listArr[2].innerHTML
)
*/
//-----------------task 5-----------------

document.querySelector("h1").style.background = "rgba(0, 128, 0, 0.3)";
let paragraphs = document.querySelectorAll("#myDiv > p");

paragraphs[0].style.fontWeight = "bold";
paragraphs[1].style.color = "red";
paragraphs[2].style.textDecoration = "underline";
paragraphs[3].style.fontStyle = "italic";

//document.querySelectorAll("#myList>li").style.display = "inline";

let listToString = document.querySelectorAll("#myList>li");
listToString.forEach(element => 
    element.style.display = "inline-block");

document.querySelector("span").style.visibility = "hidden";

