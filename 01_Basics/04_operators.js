let x = 1;
x = -x;
console.log(x);

//Arithmetic operators
let a = 4;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b); //returns remainder
console.log(a / b); //returns quotient

//concatenation
let str1 = "kritika";
let str2 = "sahota";
console.log(str1 + " " + str2);

//Exponent
// a**b raises a to the power b
console.log(a ** b);

//Assignment operators
let operator = 10;

operator += 5
console.log(operator);
operator -= 5;
console.log(operator);
operator *= 5;
console.log(operator);
operator /= 5;
console.log(operator);
operator %= 5;
console.log(operator);
operator **= 5;
console.log(operator);

// Comparison Operators

console.log(2 == 2);  // It only compares the value.
console.log(2==='2');  // it compares the value and data type as well.
console.log(2 != 2);
console.log(2 !== '2');
console.log(5 > 2);
console.log(10 < 5);
console.log(1 >= 1);
console.log(2 <= 2);
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

// bitwise operators 

let d = 5;
let g = 10;

let c = ~d;
console.log(c);