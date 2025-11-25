/* function p1(name , salary) {
    this.name = name;
    this.salary = salary;
    this.showInfos = function() {
        console.log("Name: " + this.name + " Salary: " + this.salary);
    }
}
const emp1 = new p1("John", 5000);
const emp2 = new p1("Jane", 6000);
emp1.showInfos();
emp2.showInfos(); */

// console.log(Object.prototype); // is null 
let arr = ["Akash" , "John", "Jane"];
let details = {
    name : "Akash",
    age : 24,
    salary : 5000,
    getInfo: function() {
        console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
    }
}
arr.__proto__.push("Doe");
console.log(arr);

console.log(arr.__proto__.__proto__.__proto__)

let greetings = {
    greet: "Hello!"
}

greetings.__proto__ = details;
greetings.name = "Michael";
console.log(greetings.name);
console.log(details);