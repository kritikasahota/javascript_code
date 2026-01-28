let button = document.querySelector("#Btn");
console.dir(button);

/* EVENT HANDLING */
button.onclick = () => {
    console.log("button was clicked");
}

/* EVENT OBJECT */
// button.onclick = (e) =>{
//     console.log(e);
// }

/* ADDING EVENT LISTENER */
let btn1 = document.querySelector("#Btn1");
console.dir(btn1);
btn1.addEventListener("click" ,() => {         //adding
    console.log("you clicked the BTN1");
} );

/* REMOVING EVENT LISTENER */
btn1.addEventListener("click" ,() => {
    console.log("you clicked the BTN1 - handler1");
} );

btn1.addEventListener("click" ,() => {
    console.log("you clicked the BTN1 - handler2");
} );

let handler3 = () => {
    console.log("you clicked the BTN1 - handler 3");
} ;

btn1.addEventListener("click" , handler3);
    

btn1.addEventListener("click" ,() => {
    console.log("you clicked the BTN1 - handler4");
} );

btn1.removeEventListener("click" , handler3);   //removing

/* TOGGLE BUTTON */
let mode = document.querySelector("#mode");
let currMode = "LIGHT";

mode.addEventListener("click", () => {
    if(currMode === "LIGHT"){
        currMode = "DARK";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMode = "LIGHT";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
    return;
});