/* console.log("Start of the program");

setTimeout(() => {
  console.log("First callback executed");
}, 2000);

console.log("End of the program");
*/
const cart = ["item1", "item2" , "item3" ,  "item4"];

function API(item) {
    let orderCreated = false;
    function createOrder() {
        console.log(`Order created for ${item}`);
        orderCreated = true;
    };
    function payOut() {
        if (!orderCreated) {
            console.log(`Cannot pay for ${item} — order not created yet!`);
            return;
        }
        console.log(`Payment processed for ${item}`);
    };
    return { createOrder, payOut }; // expose functions
}

const order1 = API("item1");

order1.payOut(); // ❌ Not allowed yet
order1.createOrder(); // ✔️ Order created
order1.payOut(); // ✔️ Now allowed