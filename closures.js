function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  a = 20;
  return y;
}
console.log(x());
x()(); // This will log 10

/* Explanation: The function x defines a variable 'a' and a nested function 'y' that logs 'a'.
   When x is called, it returns the function y, which retains access to 'a' through closure.
   Therefore, when we invoke the returned function y, it logs the value of 'a', which is 10. */

/* Functions As Parameter */
function outerFunction(func) {
  console.log(innerFunction());
  return "👋🏼Outer Function";
}
function innerFunction() {
  console.log("Inner function called");
  return "👋🏼Inner Function";
}
console.log(outerFunction(innerFunction)); // This will log the innerFunction definition

// Interview Question:
function counter() {
  var count = 0;
  {
    // var count = 10; -> when count is made var count becomes 11 as var is assigned to global scope
    let count = 10; // -> when count is made const count becomes 10 as const is block scoped
    setTimeout(() => {
      console.log(count);
    }, 1000);
  }
  console.log("👋🏼hello " + ++count);
}
counter();

function makeCounter() {
    /** When var is used first the value of i is calculated when logged as its in global Object */
    /** But in case of let as its in block scope the values are print in intervals */
    for (var i = 1; i <= 5; i++) {
        /** Creating a Block Scope */
        function close(i) {
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }

}
makeCounter();