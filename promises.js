/*
const patientData = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    condition: "Flu",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    condition: "Cold",
  },
  {
    id: 3,
    name: "Emily Johnson",
    age: 40,
    condition: "Allergy",
  },
];

function newEntry(patientData , name , age , condition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      patientData.push({
        id: Math.floor(Math.random() * 10 + 1),
        name: name,
        age: age,
        condition: condition,
      });
      const error = false;
      if (!error) {
        resolve(patientData[patientData.length - 1].id);
      } else {
        reject("Something went wrong.");
      }
    }, 1000);
  });
}

newEntry(patientData , "Michael Brown", 50, "Diabetes")
  .then((id) => {
    console.log(`New patient added with ID: ${id}`)})
  .catch((err) => console.log(err)); */

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API); // Fetch API returns a Promise
user.then((response) => {
  console.log(response);
});


createOrder(cart)
    .then((orderId) => {
        return proceedToPayment(orderId);
    })
    .then((paymentInfo) => {
        return showOrderSummary(paymentInfo);
    })
    .catch((error) => {
        console.log("Error:", error);
    });