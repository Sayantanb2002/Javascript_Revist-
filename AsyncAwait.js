/* const p = new Promise((resolve, reject) => {
    resolve("Promise resolved!");
});
async function getData(){
    return p;
}
const dataPromise = getData();
dataPromise.then(data => console.log(data)); // Output: Promise resolved! */

/* const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  },8000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  },15000);
});
async function handlePromise() {
    console.log("Hello World");
    const data = await p1;
    console.log(data); // Output: Promise resolved!
    console.log("Finished waiting for p1");

    const data2 = await p2;
    console.log(data2); // Output: Promise resolved!
    console.log("Finished waiting for p2");
}
handlePromise();
console.log("This is printed before the promise is resolved."); */

const API_URL = "https://api.github.com/users/akshaymarch7";
async function fetchData() {
  try {
    const data = await fetch(API_URL);
    console.log(await data.json()); // data also returns a promise so we need to await it
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchData();
