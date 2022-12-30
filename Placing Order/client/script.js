const orderItems = {
  orderInfo: [
    {
      product: "Orange",
      quantity: 3,
    },
    {
      product: "Mango",
      quantity: 5,
    },
    {
      product: "Banana",
      quantity: 12,
    },
    {
      product: "Guava",
      quantity: 6,
    },
  ],
};
const order = {
  orderId: "",
  phone: "014520369522",
};

const placeOrder = {
  order,
  orderItems,
};

document.getElementById("post-btn").addEventListener("click", () => {
  fetch("http://localhost:5000/order", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(placeOrder),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
