// const myTimeOut = setTimeout(() => {
//     console.log('a');
// } , 5000)
// function b() {
//     console.log('b');
// }
// b();
// console.log('Synchronous log between a and b');

console.log("Start");

setTimeout(function cbt() {
  console.log("Callback Timeout");
}, 5000);

fetch("https://api.netflik.com").then(function cbF() {
  console.log("Fetch Callback Timeout");
});

console.log("End");
