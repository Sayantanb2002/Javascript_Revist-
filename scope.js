/* Lexical Scope 
function a(){
    // 'b' is not defined here, so it will look for 'b' in the inner scope of function 'c'
    // However, 'b' is defined in function 'a', so it will log 10
    var b = 10;
    c();
    console.log(b);
    function c(){
        console.log(b);
    }
}
a();
*/
/* Temporal Dead Zone 
console.log(y); // undefined due to hoisting
var y = 20;
const b = 30;
console.log(b); */

/* 
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
*/
// Block Scope with let
// Block is also called as compound statement
console.log("before declaration");
let x = 1;
console.log("outside block");
{
  // The x = 2 is limited in scope to the block in which it was defined.
  const x = 2;
  console.log("inside block");
  console.log(x); // 2
}
console.log("after block");
console.log(x); // 1

/* In strict mode, function declarations inside blocks are scoped to that block 
and are hoisted to the top of the block. 

{
  foo(); // Logs "foo"
  function foo() {
    console.log("foo");
  }
}

foo(); // ReferenceError: foo is not defined

function test(num) {
    console.log(num + " is outside the block");
    {
        // Block scope
        let num = 5;
        console.log(num + " is inside the block");
    }
}

{
    // Global Block scope
    test(10);
    console.log("after test function and within block");
} */

function getPrice(taxRate , vip) {
    const basePrice = 100;
    if (vip == 1) {
        const basePrice = 80; // Shadowing the outer basePrice
        console.log("for special discount");
        return basePrice + (basePrice * taxRate * 0.5);
    }
    return basePrice + (basePrice * taxRate);
}

function displayPrice() {
    const price = getPrice(0.15 , 0);
    console.log("The price is: " + price);
}

displayPrice();
