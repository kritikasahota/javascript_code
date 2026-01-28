console.log("HELLO");
window.console.log("hello");
alert("hello");

console.dir(document);
console.dir(document.body);

/* changing background color */
//document.body.style.background = "green";

/* changing text */
//document.body.childNodes[1].innerText = "abcd";

/* DOM MANIPULATION */
let heading = document.getElementById("heading"); // selecting with Id
console.log(heading);

let heading2 = document.getElementsByClassName("heading2"); // selecting with class
console.log(heading2);

let parahs = document.getElementsByTagName("p"); //selecting with tag name
console.log(parahs);

/* QUERY SELECTOR */
let elements = document.querySelector("p");
console.log(elements);

let allElements = document.querySelectorAll("p");
console.log(allElements);

/* PROPERTIES */
let tagName = elements.tagName;   // tagName
console.dir(tagName);

/*  ATTRIBUTES */
let div = document.querySelector("div"); // getAttribute
console.dir(div);
let value = div.getAttribute("id");
console.dir(value);

console.dir(div.setAttribute("box","newBox")); //setAttribute

/*STYLE*/
let div1 = document.querySelector("#box1");
div1.style.backgroundColor = "green";

/* INSERT AN ELEMENT */
let newBtn = document.createElement("button");
newBtn.innerText = "click Me!"
console.log(newBtn);
let div2 = document.querySelector("#box1");
div2.append(newBtn);
