console.log("-----Event Loop Visualization-----");
function logMessage(msg) {
  console.log("Function is pushed to the call stack");
  console.log(msg);
}
const lateGreetings = () => {
  console.log("setTimeout callback is pushed to the callback queue");
  setTimeout(() => {
    console.log("setTimeout --> macrotask queue");
    Promise.resolve().then(() => console.log("microtask inside macrotask"));
    console.log("End of Script - Call Stack is empty now");
  }, 2000);
};

const message = logMessage("Hello👋🏼");
lateGreetings();
