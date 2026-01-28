for(let count = 0; count <= 5; count++){
    console.log("HELLO");
}
console.log("loop has ended");

// sum of n numbers using for loop
let sum = 0;
let n = 7;
for(let i = 0; i <= n; i++) {
    sum = sum + i;
    console.log("sum =  ",sum);
}

// print 1 to 5
for(let a = 1; a <= 5; a++){
    console.log("a = ", a);
}

// TASK 1 -- print even numbers upto 100
for( let a = 0; a <= 100; a++) {
    if(a % 2 == 0) {
      console.log(a);
     }
 }