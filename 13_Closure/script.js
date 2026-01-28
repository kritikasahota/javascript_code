//+++++++++++++++ LEXICAL SCOPING ++++++++++++++++++

function outer() {
  let username = "kritika";
  //console.log("OUTER", secret); // outer cannt access inner
  function inner() {
    let secret = "my123";
    console.log("inner", username); // inner can access outer
  }
  function innerTwo() {
    console.log("innerTwo", username);
  }
  inner();
  innerTwo();
}
outer();


//++++++++++++++ CLOSURE ++++++++++++++++++++

function outerFunction() {
    let counter = 0; // variable in outer scope

    function innerFunction() {
        counter++; // inner function can access outer variable
        console.log(counter);
    }

    return innerFunction;
}
const increment = outerFunction(); // outerFunction runs and returns innerFunction
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3


//another example
function clickHandler(color){
            // document.body.style.backgroundColor = `${color}`

            return function(){
                document.body.style.backgroundColor = `${color}`
            }
        }

        document.getElementById('orange').onclick = clickHandler("orange")
        document.getElementById('green').onclick = clickHandler("green")