// Functional Programming in JavaScript
// Higher Order Function for performing a specified operation on each element of an array
const calculate = (arr , operation) =>{
    const result = [];
    for(let i = 0 ; i < arr.length ; i++){
        result.push(operation(arr[i]));
    }return result;
}
const area = (radius) => Math.floor(Math.PI * radius * radius);
const circumference = (radius) => Math.floor(2 * Math.PI * radius);
const diameter = (radius) => 2 * radius;

const radii = [1, 2, 3, 4, 5];

const areas = calculate(radii, area);
const circumferences = calculate(radii, circumference);
const diameters = calculate(radii, diameter);

console.log("Areas: ", areas);
console.log("Circumferences: ", circumferences);
console.log("Diameters: ", diameters);
