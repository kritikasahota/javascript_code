let x = 10;
const y = 20;

console.log(x, y); // 10 20 


//Block scope --> Variables declared inside {} not accessible outside
if (true) {
  let a = 10;
  const b = 20;
}
console.log(a); // ❌ Error
console.log(b); // ❌ Error


//Global scope --> Accessible everywhere
let c = 300;
if (true) {
  console.log(c); // 300
}


//Same Variable Name, Different Scopes
let d = 300;

if (true) {
  let d = 10;
  console.log(d); // 10
}

console.log(d); // 300


//Nested Blocks (Inner Scope)
let a = 300;

if (true) {
  let a = 10;

  if (true) {
    console.log(a); // 10
  }
}

console.log(a); // 300


//+++++++++++++ Interesting +++++++++++++++++
console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}