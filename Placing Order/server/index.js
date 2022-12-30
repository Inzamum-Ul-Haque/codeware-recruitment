const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

// define port and app
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.afwac63.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.get("/", (req, res) => {
  res.send("Server running successfully!");
});

async function run() {
  const ordersCollection = client.db("codeware").collection("order");
  const orderItemsCollection = client.db("codeware").collection("orderItems");

  try {
    app.post("/order", async (req, res) => {
      const { order, orderItems } = req.body;
      console.log(orderItems);

      const orderItemsResult = await orderItemsCollection.insertOne(orderItems);
      order.orderId = orderItemsResult.insertedId.toString();
      const result = await ordersCollection.insertOne(order);

      if (result.acknowledged) {
        res.send({
          message: "Order placed successfully!",
          orderInfo: {
            order,
            orderItems,
          },
        });
      } else {
        res.send({
          message: "Failed placing order!",
        });
      }
    });
  } finally {
  }
}

run().catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
