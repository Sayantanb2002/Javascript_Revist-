const arr = [1, 2, 3, 4, 5];

// Map: Create a new array with each element squared
const squaredArr = arr.map(num => num * num);
console.log('Squared Array:', squaredArr); // [1, 4, 9, 16, 25]

// Filter: Create a new array with only even numbers
const evenArr = arr.filter(num => num % 2 !== 0);
console.log('Odd Numbers Array:', evenArr);

const evenSquares = arr.map(num => num * num).filter(square => square % 2 === 0);
console.log('Even Squares Array:', evenSquares); // [4, 16]

// Reduce: Sum all elements in the array
const findSum = arr.reduce((accumulator , current) => accumulator + current , 0);
console.log('Sum of Array Elements:', findSum); // 15

const user = [
    { name: 'Alice', age: 25 , lastName: 'Smith'},
    { name: 'Bob', age: 30 , lastName: 'Johnson'},
    { name: 'Charlie', age: 25 , lastName: 'Brown'},
    { name: 'David', age: 40 , lastName: 'Davis'}
]

const fullName = user.map(person => `${person.name} ${person.lastName}`);
console.log('Full Names:', fullName); // ['Alice Smith', 'Bob Johnson', 'Charlie Brown', 'David Davis']

const findAge = user.filter(person => person.age === 25);
console.log('Users aged 25:', findAge.length);

const frequencyByAge = user.reduce((acc, person) => {
    acc[person.age] = (acc[person.age] || 0) + 1;
    return acc;
},{})
console.log('Frequency by Age:', frequencyByAge);

const ageGreaterThan30 = user.filter(person => person.age > 30).map(person => person.name);
console.log('Names of users older than 30:', ageGreaterThan30); // ['David']

const getFirstNames = user.reduce((acc , person) => {
    (person.age > 30) ? acc.push(person.name) : null;
    return acc;   
} , [])
console.log('First names of users older than 30 using reduce:', getFirstNames); // ['David']