// Achived through Closure
// Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. 
// It transforms a function with multiple arguments into a series of functions, each taking a single argument.

/* Method 1: Using Arrow Functions 
function num1(a) {
    return (b) => {
        return a+b;
    }
}
const sum = num1(5);
console.log(sum(3)); // Output: 8
*/
// using closures
const add = a => b => a + b;
console.log(add(5)(4));